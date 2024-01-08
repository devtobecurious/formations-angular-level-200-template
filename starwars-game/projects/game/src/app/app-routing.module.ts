import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/components/game-list/game-list.component';
import { NewOneComponent } from './features/game/components/new-one/new-one.component';
import { environment } from '../environments/environment';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'collect',
  loadChildren: () => import('./features/collecte/collecte.routes').then(m => m.collectRoutes)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: !environment.production,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
