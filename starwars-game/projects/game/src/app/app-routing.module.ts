import { isDevMode, NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';

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
  path: 'stats',
  loadChildren: () => import('stats').then(item => item.statisticsRoutes),
  data: {
    isPrefetch: true
  }
  //  loadComponent: () => import('stats').then(item => item.StatisticsComponent)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: isDevMode(), preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
