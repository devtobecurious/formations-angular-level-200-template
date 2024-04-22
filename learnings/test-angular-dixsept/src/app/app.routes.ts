import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'games',
  loadChildren: () => import('./features/game/game.routes').then(item => item.gameRoutes)
}];
