import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Movies';
  fruits = [
    'apple',
    'cherry',
    'strawberry',
    'person',
    'deer',
    'child',
    'banana',
    'avocado',
  ];
}
