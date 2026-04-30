import { isDevMode, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { CustomPreloadRouting } from './shared/core/routing/custom-preload-routing';
import { usersRoutes } from './features/backoffice/users/users.routes';

const routes: Routes = [
  {
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  canActivate: [],
  //loadComponent: () => import('./features/game/new-one/new-one.component').then(m => m.NewOneComponent)
  component: NewOneComponent
},
{
  path: 'statistics',
  loadChildren: () => import('statistics').then(m => m.statisticsRoutes),
  data: {
    preload: true
  }
},
{
  path: 'users',
  children: usersRoutes
}
];

@NgModule({
  providers: [CustomPreloadRouting],
  imports: [RouterModule.forRoot(routes, {
    enableTracing: isDevMode(),
    preloadingStrategy: CustomPreloadRouting
   })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
