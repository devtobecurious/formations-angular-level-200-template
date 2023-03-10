import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { NewOneComponent } from './new-one/new-one.component';

const routes: Routes = [{
  path: '',
  component: GameListComponent
},
{
  path: 'new',
  component: NewOneComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
