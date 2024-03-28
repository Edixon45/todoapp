import { Component, signal, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import{FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todoapp';
  welcome = 'bienvenidos a mi nueva aplicacion de angular';
  tasks = signal([
    'instalar angular cli',
    'crear proyecto',
    'crear componete',
    'crear servicio'
  ]);

  name= signal('Edicson');
  age= 35;
  disabled= true;
  img= 'https://w3schools.com/howto/img_avatar.png';

  person=signal({
    name: 'julian',
    age: 20,
    avatar:'https://w3schools.com/howto/img_avatar.png'
  });

  colorCtrl= new FormControl();
  widthCtrl= new  FormControl(40,{
    nonNullable: true,
  });

  nameCtrl = new FormControl('julio', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });

  constructor () {
    this.colorCtrl.valueChanges.subscribe(value=>{
     console.log(value);
    });  
  };

  clickHendler(){
    alert('hola')
  }

  seleccionar(event:Event){ 
  }

  keydownHendler(event:KeyboardEvent){

  }

  changeHandler(event:Event){
    const input =event.target as HTMLInputElement;
    const newvalue =input.value;
    this.name.set(newvalue);
  }

   changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newvalue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age:parseInt(newvalue,10)
      }
    });
   }

   changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newvalue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        name:newvalue
      }
    });
   }

}
