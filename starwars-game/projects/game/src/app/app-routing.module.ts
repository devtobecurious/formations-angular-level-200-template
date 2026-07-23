import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
// import { GetAllStatsInfraService } from 'projects/statistics/src/lib/services/get-all-stats-infra.service';
// import { GetAllStatsBusinnessService } from 'projects/statistics/src/lib/services/get-all-stats-businness.service';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'stats',
  loadChildren: () => import('statistics').then(m => m.statsRoutes),
  //providers: [GetAllStatsBusinnessService, GetAllStatsInfraService]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
