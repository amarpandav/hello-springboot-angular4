import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserService} from "./shared/services/user.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppAttributesService} from "./shared/services/app-attributes.service";
import {ToastModule} from "ng2-toastr/ng2-toastr";
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {MessageService} from "./shared/services/message.service";
import {PageNotFoundComponent} from "./error-handling/page-not-found/page-not-found.component";
import {NotAuthorizedComponent} from "./error-handling/not-authorized/not-authorized.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    PageNotFoundComponent,
    NotAuthorizedComponent

  ],
  imports: [
    BrowserModule,
    FormsModule, //Required for Two-Way-Binding
    HttpModule,
    BrowserAnimationsModule, // required for angular animations
    ToastModule.forRoot(),// required for angular-toastr,
    AppRoutingModule

  ],
  providers: [
    UserService,
    AppAttributesService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
