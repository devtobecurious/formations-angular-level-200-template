import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { CustomLazyLoadingStrategy } from './shared/tools/routing';

const routes: Routes = [
  {
    path: 'games',
    loadChildren: () => import('./features/game/game.module').then(item => item.GameModule),
    data: { preload: true }
  },
  {
    path: 'people',
    loadChildren: () => import('./features/people/people.module').then(item => item.PeopleModule),
    data: { preload: false }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false,
                                           preloadingStrategy: CustomLazyLoadingStrategy })],
  providers: [
    CustomLazyLoadingStrategy
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
