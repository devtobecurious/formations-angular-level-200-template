import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { ComboGamesComponent } from './features/game/combo-games/combo-games.component';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'game-combo',
  // loadComponent: () => import('./features/game/combo-games/combo-games.component').then(item => item)
  component: ComboGamesComponent
},
{
  path: 'statistics',
  loadChildren: () => import('statistics').then(item => item.statsRoutes)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
