import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { environment } from '../environments/environment';
import { CustomPreloadModulesStrategy } from './shared/tools/routings/routing.custompreloadstrategy';

// const routes: Routes = [{
//   path: 'games',
//   component: GameListComponent
// },
// {
//   path: 'new-game',
//   component: NewOneComponent
// }];

const routes: Routes = [
  {
    path: 'games',
    loadChildren: () => import('../app/features/game/game.module').then(item => item.GameModule)
  },
  {
    path: 'stats',
    loadComponent: () => import('../app/pages/statistic/page-statistics/page-statistics.component').then(item => item.PageStatisticsComponent),
    data: {preload: true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, preloadingStrategy: CustomPreloadModulesStrategy })],
  exports: [RouterModule],
  providers: [CustomPreloadModulesStrategy]
})
export class AppRoutingModule { }
