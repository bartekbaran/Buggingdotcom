import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Guest, GuestLoginAttempt} from "../../interfaces/guest";
import {Observable} from "rxjs";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  @Output() onLogin: EventEmitter<GuestLoginAttempt> = new EventEmitter();
  login: string;
  password: string;
  profile: Observable<Guest>;
  logSuccessful:boolean = false;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.login) {
      alert('Please specify your login!');
      return;
    }

    if (!this.password) {
      alert('Please specify your password!')
    }

    const newGuestLoginAttempt:GuestLoginAttempt = {
      login: this.login,
      password: this.password
    }

    this.profile = this.loginService.getGuest(newGuestLoginAttempt)
    this.logSuccessful = true;

    this.login = '';
    this.password = '';
  }
}
