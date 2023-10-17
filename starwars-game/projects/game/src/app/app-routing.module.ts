import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { environment } from '../environments/environment';
import { CustomPreloadingModulesStrategy } from './shared/tools/routings/custom-preloading-modules-strategy';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'planets',
  loadChildren: () => import('./features/planets/planets.module').then(m => m.PlanetsModule),
  data: { preload: true }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing : !environment.production,
    preloadingStrategy: CustomPreloadingModulesStrategy
  })],
  providers: [CustomPreloadingModulesStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule { }
