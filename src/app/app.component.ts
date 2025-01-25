import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primer proyecto';
  public counter: number = 5;

  constructor() {
    console.log('El componente AppComponent ha sido creado');
  }

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 5;
  }
}
