import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { StatisticsBusiness } from 'projects/statistics/src/public-api';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent,
  providers: [
    //{ provide: StatisticsBusiness, useFactory: () => }
  ]
},
{
  path: 'new-game',
  component: NewOneComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
