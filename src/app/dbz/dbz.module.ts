

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListDBZComponent } from './components/listDBZ/listDBZ.component';
import { AddCharacterComponent } from './components/addCharacterDBZ/addCharacterDBZ.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListDBZComponent,
    AddCharacterComponent,
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule // Importar FormsModule para usar ngModel en el formulario
  ]
})
export class DbzModule { }
