import { Component, OnInit } from '@angular/core';
import {MessageService} from "../shared/services/message.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.success("Welcome to my app", "Greetings")
  }

}
