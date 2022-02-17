import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GuestLoginAttempt} from "../../interfaces/guest";
import {LoginService} from "../../services/login.service";
import {AdminLoginAttempt, HotelAdmin} from "../../interfaces/hotel-admin";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  @Output() onLogin: EventEmitter<GuestLoginAttempt> = new EventEmitter();
  email: string;
  password: string;
  profile: HotelAdmin;
  submitted: boolean = false;
  loading: boolean = false;
  loginForm: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router,
              private loginBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.loginBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const adminLoginAttempt: AdminLoginAttempt = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      isAdmin: true
    }

    this.loading = true;
    this.loginService.getAdmin(adminLoginAttempt)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data[0]);
          this.loginService.currentAdminUser = {
            id: data[0].id,
            firstname: data[0].firstname,
            lastname: data[0].lastname,
            phoneNumber: data[0].phoneNumber,
            email: data[0].email,
            password: data[0].password
          };
          this.router.navigate([`profile`]).then();
        }
      );
  }
}
