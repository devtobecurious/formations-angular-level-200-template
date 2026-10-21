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
  }
];
