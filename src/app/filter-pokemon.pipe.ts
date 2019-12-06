import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from './pokemon';

@Pipe({
  name: 'filterPokemon'
})
export class FilterPokemonPipe implements PipeTransform {

  transform(value: Pokemon[], searchValue: String): any {
    return value.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));
  }

}
