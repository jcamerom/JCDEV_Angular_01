import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root' // Este servicio se puede proporcionar en cualquier módulo
})
export class DBZService {

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 8500 },
  ];

  addCharacter(character: Character): void {

    // Con el operador ...character, conseguimos copiar todos los valores de character en un nuevo objeto
    const newCharacter: Character = {id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    // El método filter crea un nuevo array con todos los elementos que pasan la prueba implementada en el callback
    // En este caso, el callback es una función que devuelve true si el character.id es igual al id que se pasa como argumento
    this.characters = this.characters.filter(character => character.id!== id);
  }
}
