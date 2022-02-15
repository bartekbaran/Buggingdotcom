import { Component, OnInit } from '@angular/core';
import {GuestLoginAttempt} from "../../interfaces/guest";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginAttempt(loginAttempt:GuestLoginAttempt):Boolean {
    return true;
  }

}
