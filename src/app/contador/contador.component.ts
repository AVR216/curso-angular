import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  numero: number = 0;

  constructor() { }


  decrementar(): void {
    if( this.numero > 0 ) {
      this.numero --;
    }
  }

  incrementar(): void {
    this.numero ++;
  }
}
