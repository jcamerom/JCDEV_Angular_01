import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule // CommonModule provides common services and directives across all Angular apps.
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})

export class HeroesModule {}
