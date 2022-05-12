import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { CreateProfileComponent } from './features/player/create-profile/create-profile.component';

const routes: Routes = [
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'player',
    loadChildren: () => import('./features/player/player.module').then(m => m.PlayerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
