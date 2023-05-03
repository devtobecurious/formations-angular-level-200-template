import { isDevMode, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { WithFlagLazyLoadingModuleStrategy } from './shared/tools/routes';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'user',
  loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
  data: {
    preload: true
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: !isDevMode(),
    preloadingStrategy: WithFlagLazyLoadingModuleStrategy
  })],
  exports: [RouterModule],
  providers: [
    WithFlagLazyLoadingModuleStrategy
  ]
})
export class AppRoutingModule { }
