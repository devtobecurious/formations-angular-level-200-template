import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const isAuthenticatedGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, service = inject(HttpClient)) => true;

export const routes: Routes = [{
  path: 'ici',
  component: AppComponent,
  canActivate:[ isAuthenticatedGuard ]
}];
