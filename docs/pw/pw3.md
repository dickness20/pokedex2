---
title: PW3 - Property binding
---

> If you start from this step, just move to PW2 tag `git checkout PW2`

## Property bindings

Having multipe `Bulbizar` is great but we want to pass params to pokemon item to show different pokemons.

First we should define `Pokemon` Typescript Object to structure manipulated data.

```
ng generate class pokemon 
```

**Objectives of this step**:

- Define constructor with `id` and `name`

## Define @Input in Pokemon Item

Component could have data provided by their parents with attributes decorated with `.

Related [doc](https://angular.io/guide/component-interaction)

**Objectives of this step**:

- Define `pokemon` attribute in Pokemon Item
- Add `@Input()` decorator on this attribute 
