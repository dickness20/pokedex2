---
title: PW6 - Routing and Pages
---

> If you start from this step, just move to PW5 tag `git checkout PW5`

To add routing on this app you have to follow those steps:

- create an HomePage component with the content of the homepage (searchInput and pokemonList)

- empty the app component to only let the navbar

- generate an `app-routing` module to define your route with

```bash
ng generate module app-routing
```

This router will define the routes this way

```typescript
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
```

- import your new module

- define a specific page for each pokemon

- customize your page and add router-links



