import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {

  persona: Persona = {
    nombre: '',
    edad: 0
  };

  constructor() { }

  guardar() {
    console.log( this.persona );
  }
}
