import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Guest, GuestLoginAttempt} from "../../interfaces/guest";
import {Observable} from "rxjs";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() onLogin: EventEmitter<GuestLoginAttempt> = new EventEmitter();
  email: string;
  firstname: string;
  lastname: string;
  phoneNumber: number;
  password: string;
  passwordRpt: string;
  profile: Observable<Guest>;
  selected: number = -1;

  logSuccessful:boolean = false;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {}


  onSubmit() {

  }
}
