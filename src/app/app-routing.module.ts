import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonPageComponent} from './pokemon-page/pokemon-page.component';

export const routes: Routes = [

  { path: 'pokemon/:id', component: PokemonPageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
