import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input()
  pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
