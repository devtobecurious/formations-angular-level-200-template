import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';

const routes: Routes = [
  {
    path: 'games',
    component: GameListComponent,
  },
  {
    path: 'enemies',
    loadChildren: () => import('./features/enemy/enemy.module').then(item => item.EnemyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
