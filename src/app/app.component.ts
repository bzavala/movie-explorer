import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbService } from './services/breadcrumb/breadcrumb.service';
import { TheMovieDbService } from './services/the-movie-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    InputTextModule,
    RouterOutlet,
    BreadcrumbModule,
    MenubarModule,
  ],
  standalone: true,
  providers: [TheMovieDbService],
})
export class AppComponent {
  private _breadcrumbService = inject(BreadcrumbService);
  title = 'Movies';
  menuItems = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
    { label: 'Movies', icon: 'pi pi-fw pi-film', routerLink: '/movies' },
    { label: 'About', icon: 'pi pi-fw pi-info', routerLink: '/about' },
  ];

  breadcrumbItems = this._breadcrumbService.items;
}
