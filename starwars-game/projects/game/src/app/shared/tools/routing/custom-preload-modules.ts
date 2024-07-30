import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadModules implements PreloadingStrategy {

  preload(currentRoute: Route, preloadLazyRoute: () => Observable<any>): Observable<any> {
    if(currentRoute.data?.isLoading) {
      return preloadLazyRoute()
    } else {
      return of(null)
    }
  }

}
