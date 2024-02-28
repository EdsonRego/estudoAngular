import { Component } from '@angular/core';

//decorador da classe AppComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Hola Mundo desde Angular';
}
