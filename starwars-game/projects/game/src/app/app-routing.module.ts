import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
