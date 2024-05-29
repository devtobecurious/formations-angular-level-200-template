import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { CustomPreloadStrategy } from './shared/tools/custom-preload-strategy';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'player',
  loadChildren: () => import('../app/features/player/player.routes').then(item => item.playerRoutes),
  data: { preload: true }
  // loadComponent:
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadStrategy })], // PreloadAllModules
  exports: [RouterModule],
  providers: [CustomPreloadStrategy]
})
export class AppRoutingModule { }
