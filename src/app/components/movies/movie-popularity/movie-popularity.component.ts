import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { CompactNumberPipe } from 'src/app/pipes/compact-number.pipe';

@Component({
  selector: 'app-movie-popularity',
  imports: [CompactNumberPipe, DecimalPipe],
  templateUrl: './movie-popularity.component.html',
  styleUrl: './movie-popularity.component.scss',
})
export class MoviePopularityComponent {
  voteAverage = input.required<number>();
  voteCount = input.required<number>();
}
