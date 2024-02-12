import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/models/movie/movie-model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent implements OnInit {
  movie!: MovieModel;

  constructor(
    private movieClient: TheMovieDbService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getMovieById();
  }

  getMovieById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieClient.getMovieById(id).subscribe({
      next: (value) => (this.movie = value),
      error: (error) => console.log(error),
    });
  }
}
