import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {UserDto} from "../shared/models/user.dto";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users:UserDto[];

  constructor(private userService:UserService) {
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

}
