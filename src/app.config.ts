import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideRouter, Routes } from '@angular/router';
import { MovieListComponent } from './app/components/movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './app/components/movies/movie-detail/movie-detail.component';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: 'none',
          cssLayer: {
            name: 'primeng',
            order: 'app-styles, primeng'
          }
        }
      }
    })
  ]
};