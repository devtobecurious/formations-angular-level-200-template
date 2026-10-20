import { Service } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Service()
export class CustomPreloadingStrategyMobile implements PreloadingStrategy {

  preload(route: Route, callRoute: () => Observable<any>): Observable<any> {
    if(route.data?.['isPreloading']) {
      return callRoute();
    }

    return of(null)
  }

}
