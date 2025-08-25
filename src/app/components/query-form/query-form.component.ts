import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { DatePicker } from 'primeng/datepicker';
import { FluidModule } from 'primeng/fluid';
import { Select } from 'primeng/select';
import { QueryModel } from 'src/app/models/query-model';

@Component({
  selector: 'app-query-form',
  imports: [FormsModule, Select, FluidModule, Button, Card, DatePicker],
  templateUrl: './query-form.component.html',
  styleUrl: './query-form.component.scss',
})
export class QueryFormComponent {
  contentTypeOptions = [
    { label: 'Movies', value: 'movie' },
    { label: 'TV Shows', value: 'tv' },
  ];

  countOptions = [10, 20, 30, 40, 50].map((num) => ({
    label: num.toString(),
    value: num,
  }));

  aspectOptions = [
    { label: 'Popularity', value: 'popularity' },
    { label: 'Rating', value: 'rating' },
    { label: 'Revenue', value: 'revenue' },
  ];

  sortOrderOptions = [
    { label: 'Highest', value: 'desc' },
    { label: 'Lowest', value: 'asc' },
  ];

  query: QueryModel = new QueryModel();
  submittedQuery = output<QueryModel>();

  onSubmit() {
    this.submittedQuery.emit(this.query);
  }
}
