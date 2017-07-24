import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserService} from "./shared/services/user.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppAttributesService} from "./shared/services/app-attributes.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Required for Two-Way-Binding
    HttpModule,
    BrowserAnimationsModule, // required for angular animations

  ],
  providers: [
    UserService,
    AppAttributesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
