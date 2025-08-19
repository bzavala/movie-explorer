import { Component } from '@angular/core';
import { MovieModel } from 'src/app/models/movie/movie-model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-movies-trending',
    imports: [ButtonModule, TableModule],
    templateUrl: './movies-trending.component.html',
    styleUrl: './movies-trending.component.scss'
})
export class MoviesTrendingComponent {
  movies!: MovieModel[];

  constructor(private movieClient: TheMovieDbService) {
    this.movieClient.getMoviesTrendingThisWeek().subscribe({
      next: (list) => (this.movies = list),
      error: (error) => console.log(error),
    });
  }
}
