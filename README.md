# Movies

## About

Discover movies by highest or lowest popularity (vote count), revenue, or rating (vote average).

## Getting started

1. `git clone https://github.com/bzavala/movies.git`
2. `cd movies`
3. `npm install`
4. Create `api.config.json` at root level of project (`/movies`)
```
{
  "readKey": "<insert your readkey here>",
  "apiKey": "<insert your apiKey here>",
  "baseUrl": "https://api.themoviedb.org/3"
}
```
5. `ng serve`


## TODO

- Functional breadcrumbs
- Simple search vs Advanced search
- Finalize query form
- Update backdrop URL so .content updates when movie detail is loaded