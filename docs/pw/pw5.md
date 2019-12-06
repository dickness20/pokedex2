---
title: PW5 - Service and HTTP 
---

> If you start from this step, just move to PW4 tag `git checkout PW4`

In the real lif our pokemon won't be defined in html or JS code directly. We will base our content on a API.

This are the steps you have to follow:

- create a pokemon service with a sync method to fetch pokemon

```bash
ng generate service pokemon
```

- provide your service in your component and call the defined method

- switch your static method to a method returning Observable

- import the HttpClientModule and fetch this API https://pokeapi.co/api/v2/pokedex/1/
