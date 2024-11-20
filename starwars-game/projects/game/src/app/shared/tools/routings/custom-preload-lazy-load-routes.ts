import { inject, Injectable } from "@angular/core";
import { PreloadingStrategy, Route, RouteReuseStrategy } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadLazyLoadRoutes implements PreloadingStrategy {
  // private readonly monService = inject(AdminService)

  preload(route: Route, executeCallLazyLoading: () => Observable<any>): Observable<any> {
    let result = of(null) // lazy loading par appel url

    if(route.data?.isPreload) {
      result = executeCallLazyLoading() // preloading au démarrage de l'appli en asynchrone
    }

    return result
  }

}
