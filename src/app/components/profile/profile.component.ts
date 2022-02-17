import { Component, OnInit } from '@angular/core';
import {HotelAdmin} from "../../interfaces/hotel-admin";
import {Guest} from "../../interfaces/guest";
import {LoginService} from "../../services/login.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  adminProfile:HotelAdmin;
  guestProfile:Guest;
  currentProfile:number;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    if (this.loginService.currentAdminUser !== undefined) {
      this.adminProfile = this.loginService.currentAdminUser;
      this.currentProfile = 1;
    } else if (this.loginService.currentGuestUser !== undefined) {
      this.guestProfile = this.loginService.currentGuestUser;
      this.currentProfile = 2;
    } else {
      this.currentProfile = 3;
    }
  }

  currentUser():number {
    return this.currentProfile;
  }



}
