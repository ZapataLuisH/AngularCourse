import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  welcome = 'Hola dice LuisH desde Programacion Angular';
  tasks = [
    'Instalar el angular CLI',
    'Crear el proyecto',
    'Finalizar'
  ]
}
