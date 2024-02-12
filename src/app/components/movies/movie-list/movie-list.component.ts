import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie/movie-model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() year!: string;
  movies!: MovieModel[];

  constructor(private movieClient: TheMovieDbService) {}

  ngOnInit() {
    this.getMoviesByYear('1999', 10);
  }
  getMoviesByYear(year: string, limit: Number = 10): void {
    this.movieClient.getMoviesByYear(year).subscribe({
      next: (list) => (this.movies = list),
      error: (error) => console.log(error),
    });
  }
  getMovieRevenue(id: number) {
    return this.movieClient.getMovieById(id);
  }
}
