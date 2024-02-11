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

  public getMoviesByYear(year: string): Observable<MovieModel[]> {
    const params = {
      primary_release_year: year,
      sort_by: 'revenue.desc',
      page: '1',
    };
    const url = this.getUrl('discover/movie', params);

    return this.http
      .get<MovieDBResponse>(url, { headers: this.headers })
      .pipe(map((response) => response.results));
  }

  getMovieById(id: number): Observable<MovieModel> {
    const params = {
      sort_by: 'revenue.desc',
      page: '1',
    };
    const url = this.getUrl(`movie/${id}`, params);
    console.log(url);
    return this.http.get(url, {
      headers: this.headers,
    });
  }

  private getUrl(contentType: string, params?: any): string {
    let paramString = '';
    if (params != null) {
      Object.keys(params).forEach((key, index, array) => {
        const value = params[key];
        paramString += `${key}=${value}&`;
      });
    }

    return `${this.baseUrl}/${contentType}?${paramString}`;
  }
}
