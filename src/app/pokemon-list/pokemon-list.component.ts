import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  providers: [PokemonService],
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input()
  matchingValue: String = '';

  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.fetchPokemon().subscribe(pokemons => this.pokemons = pokemons);
  }
}
