import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../interfaces/hotel";
import {HotelsService} from "../../services/hotels.service";

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['./single-hotel.component.css']
})
export class SingleHotelComponent implements OnInit {

  hotels:Hotel[] = [];
  hotel:Hotel;

  constructor(private hotelService:HotelsService) { }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe((hotels) => (this.hotel = hotels[1]));
  }



}
