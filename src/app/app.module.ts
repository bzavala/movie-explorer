import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MoviesNowPlayingComponent } from './components/movies/movies-now-playing/movies-now-playing.component';
import { MoviesTrendingComponent } from './components/movies/movies-trending/movies-trending.component';
import { MoviesModule } from './components/movies/movies.module';
import { PluralizePipe } from './pipes/pluralize.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    MoviesModule,
    TableModule,
    BrowserAnimationsModule,
    PluralizePipe,
    MoviesTrendingComponent,
    MoviesNowPlayingComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
