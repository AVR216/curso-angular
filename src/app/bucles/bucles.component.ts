import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  personas: Persona[] = [
    {nombre: 'Jhon', edad: 24},
    {nombre: 'Pedro', edad: 23},
    {nombre: 'Ramiro', edad: 24},
    {nombre: 'Gonzalo', edad: 25},
    {nombre: 'Juan', edad: 26},
    {nombre: 'Andrea', edad: 27},
    {nombre: 'Carolina', edad: 28}
  ];

  constructor() { }
}
