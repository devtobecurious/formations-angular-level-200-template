import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { CustomPreloadModules } from './shared/tools/routings/custom.preload.modules';

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
  loadChildren: () => import('./features/statistics/statistics.routes').then(item => item.statisticsRoutes),
  data: {
    preload: true
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadModules })], // PreloadAllModules
  exports: [RouterModule],
  providers: [CustomPreloadModules]
})
export class AppRoutingModule { }
