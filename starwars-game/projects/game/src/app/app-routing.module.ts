import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { CustomPreloadingStrategy } from './shared/tools/custom-prefetch';

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
  loadChildren: () => import('stats').then(m => m.statsRoutes),
  data: {
    prefetch: true
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy  })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
