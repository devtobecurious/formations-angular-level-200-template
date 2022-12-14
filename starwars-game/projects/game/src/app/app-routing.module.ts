import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { WithDataConfigPreloadingStrategy } from './shared/tools/routes';

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
  loadChildren: () => import('../app/features/profile/profile.module').then(item => item.ProfileModule),
  data: {
    isPreload: environment.production
  }
},
{
  path: 'profile-deux',
  loadChildren: () => import('../app/features/profile-deux/profile.module').then(item => item.ProfileDeuxModule),
  data: {
    isPreload: environment.production
  }
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false,
                                           preloadingStrategy: WithDataConfigPreloadingStrategy })],
  exports: [RouterModule],
  providers: [
    WithDataConfigPreloadingStrategy
  ]
})
export class AppRoutingModule { }
