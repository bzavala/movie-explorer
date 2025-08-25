import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import apiConfig from '../../api.config.json';
import { MovieCredit } from '../models/movie-credit';
import { MovieVideo } from '../models/movie-video';
import { MovieModel } from '../models/movie/movie-model';
import { QueryModel } from '../models/query-model';
import { ReleaseDate } from '../models/release-date';

export interface MovieResponse {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {
  private _http = inject(HttpClient);
  baseUrl: string = 'https://api.themoviedb.org/3';

  headers: HttpHeaders = new HttpHeaders()
    .set('accept', 'application/json')
    .set('Authorization', `Bearer ${apiConfig.readKey}`);

  constructor() {
    if (!apiConfig.readKey) {
      console.error(
        'API key is not set. Please set the readKey in api.config.json.'
      );
    }
  }

  search(query: QueryModel): Observable<MovieModel[]> {
    let params = new HttpParams()
      .set('api_key', apiConfig.apiKey)
      .set('language', 'en-US')
      .set('sort_by', `${query.aspect}.${query.sortOrder}`)
      .set('page', query.page.toString());

    if (query.year) {
      params = params
        .set('primary_release_date.gte', this.formatDate(query.year))
        .set('primary_release_date.lte', this.formatDate(query.year));
    }
    console.table(params);
    const requestUrl = `${this.baseUrl}/discover/${query.contentType}`;
    const response = this._http.get(requestUrl, {
      params,
    });

    return response.pipe(
      map((res: any) =>
        res.results.map((data: any) => Object.assign(new MovieModel(), data))
      )
    );
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  getMoviesTrendingThisWeek(): Observable<MovieModel[]> {
    const url = `${this.baseUrl}/trending/movie/week?language=en-US&sort_by=vote_count.asc`;
    return this._http
      .get<MovieResponse>(url, { headers: this.headers })
      .pipe(
        map((response) =>
          response.results.map((data) => Object.assign(new MovieModel(), data))
        )
      );
  }

  getMoviesByYear(year: string): Observable<MovieModel[]> {
    const url = `${this.baseUrl}/discover/movie?primary_release_year=${year}&sort_by=revenue.desc&page=1`;
    return this._http
      .get<MovieResponse>(url, { headers: this.headers })
      .pipe(
        map((response) =>
          response.results.map((data) => Object.assign(new MovieModel(), data))
        )
      );
  }

  getMoviesNowPlaying(): Observable<MovieModel[]> {
    const url = `${this.baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}' `;
    return this._http
      .get<MovieResponse>(url, { headers: this.headers })
      .pipe(
        map((response) =>
          response.results.map((data) => Object.assign(new MovieModel(), data))
        )
      );
  }

  getMovieById(movieId: string): Observable<MovieModel> {
    const url = `${this.baseUrl}/movie/${movieId}`;
    return this._http
      .get<MovieModel>(url, {
        headers: this.headers,
      })
      .pipe(map((data) => Object.assign(new MovieModel(), data)));
  }

  getMovieCredits(movieId: string): Observable<MovieCredit> {
    const url = `${this.baseUrl}/movie/${movieId}/credits`;
    return this._http
      .get<MovieCredit>(url, { headers: this.headers })
      .pipe(map((data) => Object.assign(new MovieCredit(), data)));
  }

  getMovieReleaseDates(
    movieId: string
  ): Observable<{ iso_3166_1: string; release_dates: ReleaseDate[] }[]> {
    const url = `${this.baseUrl}/movie/${movieId}/release_dates`;
    return this._http.get<any>(url, { headers: this.headers }).pipe(
      map((response) =>
        response.results.map((data: any) => ({
          iso_3166_1: data.iso_3166_1,
          release_dates: data.release_dates.map((releaseDate: any) =>
            Object.assign(new ReleaseDate(), releaseDate)
          ),
        }))
      )
    );
  }

  getMovieVideos(movieId: string): Observable<MovieVideo[]> {
    const url = `${this.baseUrl}/movie/${movieId}/videos`;
    return this._http.get<MovieVideo[]>(url, { headers: this.headers });
  }
}
