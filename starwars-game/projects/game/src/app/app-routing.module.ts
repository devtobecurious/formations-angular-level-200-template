import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { CustomPreloadingStrategy } from './custom-preloading-modules';
import { ObsPromiseComponent } from './learnings/obs-promise/obs-promise.component';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'obs-promise',
  component: ObsPromiseComponent
},
{
  path: 'statistics',
  //loadChildren: () => import('statistics').then(m => m.statisticsRoutes)
  loadComponent: () => import('statistics').then(c => c.ListStatsComponent),
  data: {
    preload: true
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategy})],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
