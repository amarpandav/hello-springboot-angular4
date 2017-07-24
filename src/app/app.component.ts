import {Component, OnInit} from '@angular/core';
import {UserService} from "./shared/services/user.service";
import {UserDto} from "./shared/models/user.dto";
import {AppAttributesDto} from "./shared/models/app-attributes.dto";
import {AppAttributesService} from "./shared/services/app-attributes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Amars springboot angular 4 app';

  users:UserDto[];
  appAttributes: AppAttributesDto = AppAttributesDto.newInstance();

  constructor(private userService:UserService, private appAttributesService: AppAttributesService) {
    console.log("Inside AppComponent.constructor");

    //Here initialize the app related services e.g.
    this.initializeAppAttributes();
  }

  ngOnInit() {
    this.findUsers();
  }

  private findUsers(){
    this.userService.findUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private initializeAppAttributes(){
    this.appAttributesService.initializeAppAttributes().subscribe(
      (data: any) => {
        this.appAttributes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
