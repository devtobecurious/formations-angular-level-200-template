import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {
//   path: 'games',
//   component: GameListComponent
// },
// {
//   path: 'new-game',
//   component: NewOneComponent
// }
{
  path: 'games',
  loadChildren: () => import('./features/game/game.module').then(item => item.GameModule), 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
