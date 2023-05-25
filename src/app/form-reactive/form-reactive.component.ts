import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  miForm: FormGroup = this.fb.group({
      'nombre': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]]
    });

  constructor(private fb: FormBuilder) { }

  validarCampo(campo: string, error: string): boolean {
    return this.miForm.get(campo)?.errors?.[error] &&
      this.miForm.get(campo)?.touched;
  }

  guardar() {
    console.log( this.miForm.value );
  }
}