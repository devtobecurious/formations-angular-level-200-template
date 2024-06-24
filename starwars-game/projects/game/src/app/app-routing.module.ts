import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { PreloaderRouteStrategy } from './shared/services/preloader-route.strategy';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'profile',
  loadChildren: () => import('./features/profile/profile.routes').then(item => item.profileRoutes),
  data: {
    isLoadedAfterMain: true
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloaderRouteStrategy})],
  exports: [RouterModule],
  providers: [PreloaderRouteStrategy]
})
export class AppRoutingModule { }
