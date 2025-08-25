import { Component, input } from '@angular/core';
import { CastMember, CrewMember } from 'src/app/models/movie-credit';

@Component({
  selector: 'app-by-line',
  imports: [],
  templateUrl: './by-line.component.html',
  styleUrl: './by-line.component.scss',
})
export class ByLineComponent {
  directors = input.required<CrewMember[]>();
  writers = input.required<CrewMember[]>();
  stars = input.required<CastMember[]>();

  getDirectorNames(): string {
    return this._formatNames(this.directors().map((d) => d.name));
  }

  getWriterNames(): string {
    return this._formatNames(this.writers().map((d) => d.name));
  }

  getStarNames(): string {
    return this._formatNames(this.stars().map((s) => s.name));
  }

  private _formatNames(names: string[]): string {
    if (names.length === 0) return '';
    if (names.length === 1) return names[0];
    if (names.length === 2) return names.join(' and ');

    return names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1];
  }
}
