import { Component } from '@angular/core';
import { MessagesService } from '../servicios/messages.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent {

  get messagesList() {
    return this.ms.messages;
  }

  constructor(private ms: MessagesService) { }

  delete( index: number ) {
    this.ms.delete( index );
  }
}
