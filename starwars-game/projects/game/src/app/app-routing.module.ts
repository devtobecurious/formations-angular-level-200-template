import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { CustomLoadingRouteStrategy } from './shared/tools/routings';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
  {
    path: 'statistics',
    loadComponent: () => import('./features/statistics/components/list-statistics/list-statistics.component').then(item => item.ListStatisticsComponent),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomLoadingRouteStrategy })],
  exports: [RouterModule],
  providers: [CustomLoadingRouteStrategy]
})
export class AppRoutingModule { }
