import { Component, INJECTOR,computed, effect,inject,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {task} from './../../models/task.model';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ReactiveFormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
saludo = 'bienvenidos a mi proyecto';
tasks = signal<task[]>([]);

filter = signal('all');
taskByFilter = computed(() => {
  const filter = this.filter();
  const tasks = this.tasks();
  if (filter === 'pendiente' ) {
    return tasks.filter(task => !task.completed)
    };

    if ( filter === 'completado') {
      return tasks.filter(task => task.completed)
    };
    return tasks;
})

newTaskCtrl = new FormControl('',{
  nonNullable: true,
  validators :[
    Validators.required,
  ]
});

injector = inject( INJECTOR);


ngOnInit(){
  const storage = localStorage.getItem('tasks');
  if(storage){
   const tasks = JSON.parse(storage);
   this.tasks.set(tasks);
  }
  this.trackTasks();
}


trackTasks(){
  effect(() => {
    const tasks = this.tasks();
    console.log(tasks);
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },{injector: this.injector});
}

changeHandler(){
  if(this.newTaskCtrl.valid) {
    const value = this.newTaskCtrl.value.trim();
    if(value !== '') {
      this.addtask(value);
      this.newTaskCtrl.setValue('');
    }
    
}
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
 });
}
 
 updateTasksEditingMode(index:number){
  this.tasks.update((tasks)=>{
    return tasks.map((task,position)=>{
      if(position === index){
       return{
        ...task,
        editing: true,
       }
      }
      return {
        ...task,
        editing: false
      }
    })
  });
 }

  updateTasksText(index:number, event:Event){
    const input = event.target  as HTMLInputElement;
    this.tasks.update((tasks)=>{
      return tasks.map((task,position)=>{
        if(position === index){
         return{
          ...task,
          title:input.value,
          editing: false
         }
        }
        return task;
      })
    });
  }

  changueFilter(filter:string){
    this.filter.set(filter);
  }
}

