import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/components/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  // Se importan los modulos necesarios para que funcione el modulo AppModule.
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule// Agregamos DbzModule para poder utilizar sus servicios y componentes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
