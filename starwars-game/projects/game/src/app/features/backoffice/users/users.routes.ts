import { Routes } from "@angular/router";

export const usersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/display-list-user/display-list-user.component').then(m => m.DisplayListUserComponent)
  }
];
