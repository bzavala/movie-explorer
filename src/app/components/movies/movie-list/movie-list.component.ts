import { Component, input } from '@angular/core';
import { MovieModel } from 'src/app/models/movie/movie-model';

import { RouterModule } from '@angular/router';
import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { MoviePopularityComponent } from '../movie-popularity/movie-popularity.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  standalone: true,
  imports: [
    CardModule,
    RouterModule,
    MoviePopularityComponent,
    TruncatePipe,
    Button,
  ],
})
export class MovieListComponent {
  movies = input.required<MovieModel[]>();
}
