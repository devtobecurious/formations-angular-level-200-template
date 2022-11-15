import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { CustomPreloadingStrategy } from './shared/tools/routes/custom-preloading-strategy';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'profil',
  loadChildren: () => import('../app/features/user/user.module').then(item => item.UserModule),
  data: { // objet static pour une route donnée
    preload: true
  }
},
{
  path: 'stats',
  loadChildren: () => import('../app/features/statistics/stat.module').then(item => item.StatModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production,
                                           preloadingStrategy: CustomPreloadingStrategy })],
  providers: [
    CustomPreloadingStrategy
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
