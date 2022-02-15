import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Hotel} from "../interfaces/hotel";
import {Observable} from "rxjs";

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private apiUrl:string = "http://localhost:3000/hotels";

  constructor(private http:HttpClient) { }

  getHotels():Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  getHotel(hotel:Hotel):Observable<Hotel> {
    const url = `${this.apiUrl}/${hotel.id}`;
    return this.http.get<Hotel>(url);
  }

  deleteHotel(hotel:Hotel):Observable<Hotel> {
    const url = `${this.apiUrl}/${hotel.id}`;
    return this.http.delete<Hotel>(url);
  }

  addHotel(hotel:Hotel):Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl, hotel, httpOptions);
  }
}
