import { Injectable } from '@angular/core';
import {Hotel} from "../interfaces/hotel";
import {Observable} from "rxjs";
import {Opinion} from "../interfaces/opinion";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  private apiUrl:string = "http://localhost:3000/opinions";

  constructor(private http:HttpClient) { }

  getOpinionsForHotel(hotel:Hotel):Observable<Opinion[]> {
    const url = `${this.apiUrl}?hotelID=${hotel.id}`;
    return this.http.get<Opinion[]>(url);
  }

  getOpinionsForId(id:number):Observable<Opinion[]> {
    const url = `${this.apiUrl}?hotelID=${id}`;
    return this.http.get<Opinion[]>(url);
  }

  addOpinion(opinion:Opinion):Observable<Opinion> {
    return this.http.post<Opinion>(this.apiUrl, opinion, httpOptions);
  }
}
