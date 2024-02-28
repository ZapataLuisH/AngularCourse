import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola dice LuisH desde Programacion Angular';
  tasks = [
    'Instalar el angular CLI',
    'Crear el proyecto',
    'Finalizar'
  ];
  name: string = "Nicolas";
  age: string = '18';
  disabled = true;
  img='https://w3schools.com/howto/img_avatar.png'

}
