import { Component } from '@angular/core';
import { MessagesService } from '../servicios/messages.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent {

  newMessage: string = '';

  constructor(private  ms: MessagesService) { }

  guardar() {
   if( this.newMessage.trim().length < 1 ) {
      return;
   }
   this.ms.addMessages( this.newMessage );
   this.newMessage = '';
  }
}
