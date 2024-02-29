import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from '../../../app/models/task.model'
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false
    }
  ]);

  //Este método agrega la nueva tarea a las existentes
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addtask(newTask);
     }

  addtask(title: string){
      const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index))
  }

  updateTask(index: number){
    this.tasks.update((tasks)=>{
      return tasks.map((task, position)=>{
        if (position === index){
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
