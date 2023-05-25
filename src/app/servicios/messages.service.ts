import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  get messages(): string[] {
    return [...this._messages];
  }

  private _messages: string[] = [];

  constructor() { }

  addMessages(message: string) {
    this._messages.push( message );
  }

  delete( index: number ) {
    this._messages.splice(index, 1);
  }
}