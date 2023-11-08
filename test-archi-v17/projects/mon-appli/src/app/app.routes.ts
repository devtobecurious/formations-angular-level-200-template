import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'games',
  loadChildren: () => import('./features/games/games.routes').then(item => item.lazyGamesRoutes),
  data: {preloading: true}
}];
