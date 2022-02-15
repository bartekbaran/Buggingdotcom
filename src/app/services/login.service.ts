import { Injectable } from '@angular/core';
import {Guest, GuestLoginAttempt} from "../interfaces/guest";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl:string = "http://localhost:3000/guests";

  constructor(private http:HttpClient) { }

  getGuests():Observable<Guest[]> {
    return this.http.get<Guest[]>(this.apiUrl);
  }

  getGuest(loginAttempt:GuestLoginAttempt):Observable<Guest> {
    const url = `${this.apiUrl}/1`
    return this.http.get<Guest>(url);
  }

}
