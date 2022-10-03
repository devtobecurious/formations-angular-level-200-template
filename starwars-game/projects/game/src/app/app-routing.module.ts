import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { CustomPreloadingStrategy } from './shared/tools/routings';

const routes: Routes = [
  {
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
    data: { preloading: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy,
                                           enableTracing: !environment.production } )],
  exports: [RouterModule],
  providers: [
    CustomPreloadingStrategy
  ]
})
export class AppRoutingModule { }
