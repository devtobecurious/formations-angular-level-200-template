import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';

const routes: Routes = [{
  path: 'games',
  //component: GameListComponent,
  loadChildren: () => import('./features/game/game.module').then(item => item.GameModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
