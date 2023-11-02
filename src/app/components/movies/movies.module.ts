import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [MovieListComponent],
})
export class MoviesModule {}
