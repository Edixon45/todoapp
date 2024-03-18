import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  welcome = 'bienvenidos a mi nueva aplicacion de angular';
  tasks = [
    'instalar angular cli',
    'crear proyecto',
    'crear componete',
    'crear servicio'

  ];

}
