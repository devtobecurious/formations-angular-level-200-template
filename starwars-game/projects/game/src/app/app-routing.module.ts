import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { PreLoadingStrategy } from './shared/tools/routing/pre-loading-strategy';

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
  data: { preloading: true, order: 1 }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreLoadingStrategy })],
  exports: [RouterModule],
  providers: [PreLoadingStrategy]
})
export class AppRoutingModule { }
