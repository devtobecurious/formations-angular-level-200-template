import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { StatisticsBusiness } from 'projects/statistics/src/public-api';
import { CustomPreloadLazyLoadRoutes } from './shared/tools/routings/custom-preload-lazy-load-routes';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent,
  providers: [
    //{ provide: StatisticsBusiness, useFactory: () => }
  ]
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'statistics',
  loadChildren: () => import('statistics').then(item => item.statisticsRoutes),
  data: {
    isPreload: true,

  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadLazyLoadRoutes })],
  exports: [RouterModule],
  providers: [
    CustomPreloadLazyLoadRoutes
  ]
})
export class AppRoutingModule { }
