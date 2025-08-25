import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MovieModel } from 'src/app/models/movie/movie-model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-movies-now-playing',
  standalone: true,
  imports: [ButtonModule, TableModule],
  templateUrl: './movies-now-playing.component.html',
  styleUrl: './movies-now-playing.component.scss'
})
export class MoviesNowPlayingComponent {
  private _movieClient = inject(TheMovieDbService);
  title = 'Movies Now Playing';
  movies: MovieModel[];

  constructor() {
    this.movies = new Array<MovieModel>();
    this._movieClient.getMoviesTrendingThisWeek().subscribe({
      next: (list) => {
        this.movies = list;
      },
      error: (error) => console.error(error),
    });
  }
}
