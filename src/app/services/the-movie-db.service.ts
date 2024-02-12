import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import apiConfig from '../api.config.json';
import { MovieModel } from '../models/movie/movie-model';

export interface MovieDBResponse {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {
  baseUrl: string = 'https://api.themoviedb.org/3';

  headers: HttpHeaders = new HttpHeaders()
    .set('accept', 'application/json')
    .set('Authorization', apiConfig.header);

  constructor(private http: HttpClient) {}

  getMoviesTrendingWeek(): Observable<MovieModel[]> {
    const url = `${this.baseUrl}/trending/movie/week?language=en-US&sort_by=vote_count.asc`;
    return this.http
      .get<MovieDBResponse>(url, { headers: this.headers })
      .pipe(map((response) => response.results));
  }

  getMoviesByYear(year: string): Observable<MovieModel[]> {
    const url = `${this.baseUrl}/discover/movie?primary_release_year=${year}&sort_by=revenue.desc&page=1`;
    return this.http
      .get<MovieDBResponse>(url, { headers: this.headers })
      .pipe(map((response) => response.results));
  }

  getMoviesNowPlaying(): Observable<MovieModel[]> {
    const url = `${this.baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}' `;
    return this.http
      .get<MovieDBResponse>(url, { headers: this.headers })
      .pipe(map((response) => response.results));
  }

  getMovieById(id: number): Observable<MovieModel> {
    const url = `${this.baseUrl}/movie/${id}`;
    return this.http.get(url, {
      headers: this.headers,
    });
  }
}
