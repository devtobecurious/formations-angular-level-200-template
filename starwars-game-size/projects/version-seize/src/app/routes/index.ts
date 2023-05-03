import { Routes } from '@angular/router';
export const mainRoutes: Routes = [
  {
    path: '',
  },
  {
    path: 'planets',
    loadChildren: () => import('../features/planets/routes/index').then(m => m.planetRoutes)
  }
]
