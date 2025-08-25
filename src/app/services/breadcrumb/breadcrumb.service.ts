import { Injectable, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  items = signal<MenuItem[]>([
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/',
    },
  ]);
}
