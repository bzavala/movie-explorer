import { Component, input } from '@angular/core';
import { MoviePopularityComponent } from '../movies/movie-popularity/movie-popularity.component';

@Component({
  selector: 'app-highlight-line',
  imports: [MoviePopularityComponent],
  templateUrl: './highlight-line.component.html',
  styleUrl: './highlight-line.component.scss',
})
export class HighlightLineComponent {
  releaseYear = input.required<string>();
  rating = input.required<string>();
  runtime = input.required<string>();
  voteAverage = input.required<number>();
  voteCount = input.required<number>();
}
