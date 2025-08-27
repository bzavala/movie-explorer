# moovees

A simple app that allows users to get a list of movies from a time range and filter them by most/least popularity, revenue, or rating.

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

- Finalize query form
- Simple search vs Advanced search
- Functional breadcrumbs
- Update backdrop URL so .content updates when movie detail is loaded
