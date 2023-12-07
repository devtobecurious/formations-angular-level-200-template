import { Injectable, NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';

const routes: Routes = [
//   {
//   path: 'games',
//   component: GameListComponent
// },
// {
//   path: 'new-game',
//   component: NewOneComponent
// },
{
  path: 'games',
  loadChildren: () => import('./features/game/game.module').then(item => item.GameModule)
},
{
  path: 'stats',
  loadChildren: () => import('statistics').then(item => item.statisticsRoutes),
  data: {preload: true}
}
// {
//   path: 'stats',
//   loadComponent: () => import('statistics').then(item => item.ListStatisticsComponent)
// }
];

@Injectable()
export class CustomLazyLoadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data?.preload) {
      return fn(); // lazy loading activé : on va charger le js depuis le serveur
    }

    return of(null);
  }

}

@NgModule({
  imports: [RouterModule.forRoot(routes, {
                                            enableTracing: ! environment.production,
                                            preloadingStrategy: CustomLazyLoadingStrategy
                                          })],
  providers: [CustomLazyLoadingStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule { }
