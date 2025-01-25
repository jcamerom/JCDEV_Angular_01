import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name:string = 'ironman';
  public age:number = 45;

  constructor() {}

  get capitalizedName(): string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  getHeroDescription(): string {
    return `${this.capitalizedName} is a ${this.age} year old hero`;
  }

  changeHero(): void {
    this.name = 'thor';
  }

  changeAge(): void {
    this.age = 50;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
