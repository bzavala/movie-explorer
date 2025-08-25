import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { MovieModel } from 'src/app/models/movie/movie-model';
import { QueryModel } from 'src/app/models/query-model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';
import { MovieListComponent } from '../movies/movie-list/movie-list.component';
import { QueryFormComponent } from '../query-form/query-form.component';

@Component({
  selector: 'app-home',
  imports: [MovieListComponent, QueryFormComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private _movieDbClient = inject(TheMovieDbService);

  movies = signal<MovieModel[]>([]);

  query = signal<QueryModel | null>(null);

  constructor() {
    effect(() => {
      this._setMovies();
    });
  }

  private _setMovies(): void {
    const query = this.query();
    if (!!query) {
      this._movieDbClient.search(query).subscribe({
        next: (list) => {
          this.movies.set(list);
          console.log(`Movies from query:`, this.movies());
        },
        error: (error) => console.error(error),
      });
      this.query.set(null);
    } else {
      console.error('Query is null or undefined');
    }
  }

  onQuerySubmitted(query: QueryModel): void {
    this.query.set(query);
  }
}
