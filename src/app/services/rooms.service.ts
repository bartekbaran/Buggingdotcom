import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../interfaces/room";
import {Hotel} from "../interfaces/hotel";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private apiUrl:string = "http://localhost:3000/rooms"

  constructor(private http:HttpClient) { }

  getRoomsForHotel(hotel:Hotel) {
    const url = `${this.apiUrl}/${hotel.id}`;
    return this.http.get<Room[]>(url);
  }
}
