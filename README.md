# Movies

This project is an Angular application which connects to The Movie Database API and allows users to search/browse movies and drill into their data. It includes a query form composed of PrimeNG form and layout elements. When the user clicks ’Search’, the relevant movie list is dynamically rendered in a series of customized PrimeNG card components. Once the user locates a movie they want to learn more about, they click ‘View details” for that movie, and they’re able to see much more detail about the film along with a tabbed presentation of Cast and Crew members.

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