import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { LazyPreloadStrategy } from './shared/tools/routing/lazy-preload-strategy';

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
  loadChildren: () => import('../app/features/admin-user/admin-user.module').then(item => item.AdminUserModule),
  data: {
    isLoading: true
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: environment.production, preloadingStrategy: LazyPreloadStrategy })],
  exports: [RouterModule],
  providers: [
    LazyPreloadStrategy
  ]
})
export class AppRoutingModule { }
