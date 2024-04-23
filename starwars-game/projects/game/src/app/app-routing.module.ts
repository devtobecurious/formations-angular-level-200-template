import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategy } from './shared/tools/routes/custom-loading-routes';

const routes: Routes = [
//   {
//   path: 'games',
//   component: GameListComponent
// },
// {
//   path: 'new-game',
//   component: NewOneComponent
// }
{
  path: 'games',
  loadChildren: () => import('./features/game/game.module').then(item => item.GameModule),
  data: {
    isLoading: true
  }
},
{
  path: 'statistics',
  loadChildren: () => import('./features/statistics/statistics.routes').then(item => item.statisticRoutes)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
