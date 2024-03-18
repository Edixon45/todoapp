import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {task} from './../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
saludo = 'bienvenidos a mi proyecto';
tasks = signal<task[]>([
  {
    id:Date.now(),
    title:'crear proyecto',
    completed:false
  },
  {
    id:Date.now(),
    title:'crear componentes',
    completed:false
  },

  
]);

changeHandler(event:Event){
  const input =event.target as HTMLInputElement;
  const newtasks =input.value;
  this.addtask(newtasks);
}
addtask(title:string){
  const newtasks ={
    id:Date.now(),
    title,
    completed:false,
  }
  this.tasks.update((tasks)=>[...tasks,newtasks]);
}


deleteTask(index:number){
  this.tasks.update((tasks)=>tasks.filter((task,position)=>position !== index)); 
}

updateTask(index:number){
this.tasks.update((tasks)=>{
  return tasks.map((task,position)=>{
    if(position === index){
     return{
      ...task,
      completed: !task.completed
     }
    }
    return task;
  })
})
}

}

