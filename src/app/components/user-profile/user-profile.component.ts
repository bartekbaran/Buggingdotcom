import {Component, Input, OnInit} from '@angular/core';
import {HotelAdmin} from "../../interfaces/hotel-admin";
import {Guest} from "../../interfaces/guest";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() currentProfile:number;
  @Input() adminProfile:HotelAdmin;
  @Input() guestProfile:Guest;

  constructor() { }

  ngOnInit(): void {
  }

  isHotelAdded():boolean {
    return !(this.currentProfile === 1 && this.adminProfile.hotelID !== undefined);
  }

}
