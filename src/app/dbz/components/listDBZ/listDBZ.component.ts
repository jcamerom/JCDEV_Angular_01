import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './listDBZ.component.html',
  styleUrl: './listDBZ.component.css',
})
export class ListDBZComponent {

  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 10 },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id?: string): void {
    // TODO: emitir el Id del personaje a eliminar
    if( !id ) return;
    this.onDelete.emit(id);
  }
}
