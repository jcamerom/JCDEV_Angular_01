import { Component } from "@angular/core";

// Necesita como parámetros:
  // Selector: Nombre del selector que utilizaremos en el HTML
  // Template: Plantilla que se usará para renderizar el componente
  // Estilos: Estilos que se aplicarán al componente
  // Atención al uso de comillas o backtips para escribir en multilíneas
@Component({
  selector: 'app-counter',
  template: `
      <p>Este es mi componente Counter</p>
      <h3>Counter: {{ counter }}</h3>
      <br>
      <button (click)="increaseBy(+1)">+1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>

    `,
  styles: `p {
              font-style: italic;
              font-size: 24px;
              color: blue;
          }`
})

export class CounterComponent {

  public counter: number = 10;

  constructor() {

  }

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 10;
  }
}
