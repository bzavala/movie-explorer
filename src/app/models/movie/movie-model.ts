import { BackdropSizes } from 'src/app/enums/backdrop-sizes.enum';
import { PosterSizes } from 'src/app/enums/poster-sizes.enum';
import { CastMember, CrewMember, MovieCredit } from '../movie-credit';
import { ReleaseDate } from '../release-date';

export class MovieModel {
  adult: boolean = true;
  backdrop_path: string = '';
  belongs_to_collection?: any;
  budget: number = 0;
  credits?: MovieCredit;
  genres: { id: number; name: string }[] = [];
  homepage: string = '';
  id: number = 0;
  imdb_id: string = '';
  original_language: string = '';
  original_title: string = '';
  overview: string = '';
  popularity: number = 0;
  poster_path: string = '';
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[] = [];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[] = [];
  release_date: string = '';
  release_dates?: { iso_3166_1: string; release_dates: ReleaseDate[] }[] = [];
  revenue: number = 0;
  runtime: number = 0;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[] = [];
  status: string = '';
  tagline: string = '';
  title: string = '';
  video: boolean = true;
  videos: string[] = [];
  vote_average: number = 0;
  vote_count: number = 0;

  constructor(data?: Partial<MovieModel>) {
    Object.assign(this, data);
  }

  getBackdropUrl(
    width: BackdropSizes = BackdropSizes.W1280,
    height: string = ''
  ): string {
    return `https://image.tmdb.org/t/p/${width}/${this.backdrop_path}`;
  }
  getPosterUrl(
    width: PosterSizes = PosterSizes.W185,
    height: string = ''
  ): string {
    return `https://image.tmdb.org/t/p/${width}/${this.poster_path}`;
  }

  getPosterAltText(): string {
    return this.title ? `Poster for ${this.title}` : 'Movie Poster';
  }

  getReleaseYear(): string {
    return this.release_date ? this.release_date.split('-')[0] : '';
  }

  getCast(): CastMember[] {
    return this.credits ? this.credits.cast : [];
  }

  getCrew(): CrewMember[] {
    return this.credits ? this.credits.crew : [];
  }

  getStars(): CastMember[] {
    if (!!this.credits && this.credits.cast.length > 0) {
      this.credits.cast.sort((a, b) => a.order - b.order);
      return this.credits.cast.slice(0, 3);
    } else {
      return [];
    }
  }

  getDirectors(): CrewMember[] {
    if (!!this.credits && this.credits.crew.length > 0) {
      return this.credits.crew.filter((member) => member.job === 'Director');
    } else {
      return [];
    }
  }

  getWriters(): CrewMember[] {
    if (!!this.credits && this.credits.crew.length > 0) {
      return this.credits.crew.filter((member) =>
        ['Writer', 'Screenplay', 'Author'].includes(member.job)
      );
    } else {
      return [];
    }
  }

  getRating(): string {
    if (!!this.release_dates && this.release_dates.length > 0) {
      const usRelease = this.release_dates.find(
        (r) => r.iso_3166_1 === 'US' && r.release_dates.length > 0
      );
      if (usRelease) {
        const certification = usRelease.release_dates[0].certification;
        return certification ? certification : 'NR';
      } else {
        return 'NR';
      }
    } else {
      return 'NR';
    }
  }

  getRuntime(): string {
    if (this.runtime > 0) {
      const hours = Math.floor(this.runtime / 60);
      const minutes = this.runtime % 60;
      return `${hours}h ${minutes}m`;
    } else {
      return 'NR';
    }
  }
}
