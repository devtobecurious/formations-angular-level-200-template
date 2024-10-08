import { isDevMode, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { ManualPreloadModules } from './shared/tools/routing/manual-preload-modules';

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
    data: {
      toLoad: true
    }
  },
  {
    path: 'statistics-2',
    loadChildren: () => import('statistics').then(item => item.statisticsRoutes),
    data: {
      toLoad: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: ! isDevMode(), preloadingStrategy: ManualPreloadModules})],
  exports: [RouterModule],
  providers: [
    ManualPreloadModules
  ]
})
export class AppRoutingModule { }
