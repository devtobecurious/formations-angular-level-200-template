import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { CustomLazyLoadingStrategy } from './shared/tools/routing';

const routes: Routes = [{
  path: 'games',
  loadChildren: () => import('./features/game/game.module').then(item => item.GameModule),
  data: { preload: true}
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production,
                                           preloadingStrategy: CustomLazyLoadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
