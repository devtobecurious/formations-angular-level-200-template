import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { statisticsRoutes } from 'statistics';
import { CustomPreloadModules } from './shared/tools/routing/custom-preload-modules';

const routes: Routes = [
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'new-game',
    component: NewOneComponent
  },
  {
    path: 'statistics',
    loadChildren: () => import('statistics').then(item => item.statisticsRoutes),
    data: { loading: true }
    //children: statisticsRoutes
  },
  {
    path: 'friends',
    loadChildren: () => import('./features/friends/friends.routes').then(item => item.friendsRoutes),
    data: { loading: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadModules })],
  exports: [RouterModule],
  providers: [CustomPreloadModules]
})
export class AppRoutingModule { }
