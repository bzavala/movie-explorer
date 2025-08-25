export class QueryModel {
  aspect: 'popularity' | 'rating' | 'revenue' = 'popularity';
  contentType: 'movie' | 'tv' = 'movie';
  count: number | null = 10;
  page: number = 1;

  month: Date | null = null;
  year: Date | null = null;
  sortOrder: 'asc' | 'desc' = 'desc';

  constructor(init?: Partial<QueryModel>) {
    Object.assign(this, init);
  }
}
