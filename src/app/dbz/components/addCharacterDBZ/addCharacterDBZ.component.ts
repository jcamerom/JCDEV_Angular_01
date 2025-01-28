import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character-dbz',
  templateUrl: './addCharacterDBZ.component.html',
  styleUrl: './addCharacterDBZ.component.css',
})
export class AddCharacterComponent {
  // Esta línea crea un evento nuevo para emitir cuando se agrega un nuevo personaje
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    // debugger; // Este debugger permite pausar la ejecución en el código y verificar valores

    console.log(this.character);
    if (this.character.name.length === 0 && this.character.power > 0) {
      return;
    }

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  }
}
