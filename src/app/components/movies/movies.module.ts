import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({ declarations: [MovieListComponent],
    bootstrap: [],
    exports: [MovieListComponent], imports: [BrowserModule,
        FormsModule,
        ButtonModule,
        TableModule,
        BrowserAnimationsModule,
        RouterModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class MoviesModule {}
