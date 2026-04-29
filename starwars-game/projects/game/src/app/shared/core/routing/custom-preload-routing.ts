import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadRouting implements PreloadingStrategy {
  preload(route: Route, lazyRouteFunction: () => Observable<any>): Observable<any> {
    let result = of(null);

    if (route.data && route.data['preload']) {
      result = lazyRouteFunction();
    }

    return result;
  }
}
