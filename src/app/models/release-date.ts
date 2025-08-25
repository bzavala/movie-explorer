export class ReleaseDate {
  certification: string = '';
  descriptors: string[] = [];
  iso_639_1: string = '';
  note: string = '';
  release_date: string = '';
  type: number = 0;

  constructor(data?: Partial<ReleaseDate>) {
    Object.assign(this, data);
  }
}
