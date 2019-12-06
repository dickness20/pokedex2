import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  public id;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
