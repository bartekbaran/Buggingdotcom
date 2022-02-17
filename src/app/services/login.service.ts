import {Injectable} from '@angular/core';
import {Guest, GuestLoginAttempt} from "../interfaces/guest";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AdminLoginAttempt, HotelAdmin} from "../interfaces/hotel-admin";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public currentGuestUser:Guest;
  public currentAdminUser:HotelAdmin;

  private apiGuestUrl:string = "http://localhost:2115/authentication/log-in-guest";
  private apiAdminUrl:string = "http://localhost:3000/hotelAdmins";

  constructor(private http:HttpClient) { }

  getGuest(loginAttempt:GuestLoginAttempt):Observable<Guest> {
    return this.http.post<Guest>(this.apiGuestUrl, loginAttempt);
  }

  getAdmin(loginAttempt:AdminLoginAttempt):Observable<HotelAdmin[]> {
    const url = `${this.apiAdminUrl}?username=${loginAttempt.email}&password=${loginAttempt.password}`;
    this.http.get<HotelAdmin[]>(url).subscribe(admin => this.currentAdminUser = admin[0]);
    return this.http.get<HotelAdmin[]>(url);
  }

  addGuest(guest:Guest):Observable<Guest> {
    return this.http.post<Guest>(this.apiGuestUrl, guest, httpOptions)
  }

  addAdmin(admin:HotelAdmin):Observable<HotelAdmin> {
    return this.http.post<HotelAdmin>(this.apiAdminUrl, admin, httpOptions);
  }

  isUserLogged():Observable<boolean> {
    return Observable.create(this.currentGuestUser !== undefined || this.currentAdminUser !== undefined);
  }

}
