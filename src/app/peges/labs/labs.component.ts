import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
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
    name: 'Maria',
    age: 35,
    avatar:'https://w3schools.com/howto/img_avatar.png'
  })

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

 

}
