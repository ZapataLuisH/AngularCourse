import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
  name = signal("Nicolas");
  age: string = '18';
  disabled = true;
  img='https://w3schools.com/howto/img_avatar.png'

  clickHandler(){
    alert('Hola')
  }


  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50,{
    nonNullable: true
  });

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })

  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);

  }


}
