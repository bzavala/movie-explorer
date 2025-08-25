import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';
import { TabsModule } from 'primeng/tabs';
import { PosterSizes } from 'src/app/enums/poster-sizes.enum';

import { DividerModule } from 'primeng/divider';
import { MovieModel } from 'src/app/models/movie/movie-model';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { BreadcrumbService } from 'src/app/services/breadcrumb/breadcrumb.service';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';
import { ByLineComponent } from '../../by-line/by-line.component';
import { HighlightLineComponent } from '../../highlight-line/highlight-line.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    ByLineComponent,
    Card,
    CarouselModule,
    ChipModule,
    CommonModule,
    HighlightLineComponent,
    ImageModule,
    DividerModule,
    TabsModule,
    TruncatePipe,
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  private _movieClient = inject(TheMovieDbService);
  private _breadcrumbService = inject(BreadcrumbService);
  private route = inject(ActivatedRoute);
  movieId: string | null = this.route.snapshot.paramMap.get('id');
  movie: MovieModel = new MovieModel();

  PosterSizes = PosterSizes;

  constructor() {
    if (!!this.movieId) {
      this._setMovie();
    } else {
      console.error('Movie ID is null or undefined');
    }
  }

  ngOnInit(): void {
    this._breadcrumbService.items.update((items) => [
      ...items,
      { label: 'Movies', routerLink: '/movies' },
      { label: this.movie.title },
    ]);
  }

  private _setMovie(): void {
    const id = this.movieId; // Set as local constant to avoid multiple null checks
    if (!!id) {
      this._movieClient.getMovieById(id).subscribe({
        next: (value) => {
          this.movie = value;
          this._setMovieCredits(id);
          this._setReleaseDates(id);
        },
        error: (error) => console.error(error),
      });
    }
  }

  private _setMovieCredits(movieId: string): void {
    this._movieClient.getMovieCredits(movieId).subscribe({
      next: (value) => (this.movie.credits = value),
      error: (error) => console.error(error),
    });
  }

  private _setReleaseDates(movieId: string): void {
    this._movieClient.getMovieReleaseDates(movieId).subscribe({
      next: (value) => (this.movie.release_dates = value),
      error: (error) => console.error(error),
    });
  }

  private _setVideoUrl(movieId: string): void {}
}
