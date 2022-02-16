import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule,Routes } from "@angular/router";
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { SingleHotelComponent } from './components/single-hotel/single-hotel.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {MatMenuModule} from "@angular/material/menu";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";

const appRoutes:Routes = [
  { path: '', component:HotelListComponent },
  { path: 'hotel', component:SingleHotelComponent },
  { path: 'loginGuest', component:LoginComponent },
  { path: 'loginAdmin', component:LoginAdminComponent },
  { path: 'register', component:RegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HotelListComponent,
    HotelComponent,
    FooterComponent,
    SingleHotelComponent,
    LoginComponent,
    RegisterComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
