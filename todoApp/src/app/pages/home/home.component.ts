import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal([
    'Instalar el angular CLI',
    'Crear el proyecto',
    'Finalizar todo',
    'Hacer mercado'
  ]);

  //Este método agrega la nueva tarea a las existentes
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.tasks.update((tasks) => [...tasks, newTask]); //el metodo Update crea un nuevo estado añadido a la lista anterior
  }
  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index))
  }

}
