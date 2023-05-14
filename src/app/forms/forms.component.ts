import { Component } from '@angular/core';
import {FormControl, Validators , FormGroup} from '@angular/forms'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  get nombre(){
    return this.formUser.get('nombre') as FormControl;
  }

  get apellido(){
    return this.formUser.get('apellido') as FormControl;
  }


  get correo(){
    return this.formUser.get('correo') as FormControl;
  }



 formUser = new FormGroup({
  'nombre': new FormControl ('', Validators.required),
  'apellido' : new FormControl ('', Validators.required),
  'correo' :new FormControl ('', [Validators.required , Validators.email]),
 });

}
