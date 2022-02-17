import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Guest, GuestLoginAttempt} from "../../interfaces/guest";
import {LoginService} from "../../services/login.service";
import {first, Observable} from "rxjs";
import {AdminLoginAttempt, HotelAdmin} from "../../interfaces/hotel-admin";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<GuestLoginAttempt> = new EventEmitter();
  email: string;
  password: string;
  profile: HotelAdmin;
  submitted: boolean = false;
  loading: boolean = false;
  loginForm: FormGroup;

  constructor(private loginService:LoginService,
              private router:Router,
              private loginBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.loginBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const guestLoginAttempt: GuestLoginAttempt = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      isAdmin: false
    }

    this.loading = true;
    this.loginService.getGuest(guestLoginAttempt)
      .pipe(first())
      .subscribe(
        data => {
          this.loginService.currentGuestUser = {
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            phoneNumber: data.phoneNumber,
            email: data.email,
            password: data.password
          };
          this.router.navigate([`profile`]).then();
        }
      );
  }
}
