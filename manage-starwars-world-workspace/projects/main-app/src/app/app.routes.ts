import { Routes } from '@angular/router';
import { HomePage } from './home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full'
  },
  {
    path: 'people',
    loadChildren: () => import('./features/people/people.routes'),
    data: {
        isPreloading: true
    }
  },
  {
    path: 'planets',
    loadChildren: () => import('./features/planets/planets.routes'),
    data: {
        isPreloading: true
    }
  },
  {
    path: 'starships',
    loadComponent: () => import('./features/startships/pages/all-starships.page/all-starships.page').then(page => page.AllStarshipsPage),
    data: {
        isPreloading: true
    }
  }
];
