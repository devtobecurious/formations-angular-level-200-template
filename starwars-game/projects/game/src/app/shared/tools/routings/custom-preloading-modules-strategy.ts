import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadingModulesStrategy implements PreloadingStrategy {

  preload(route: Route, routeLoading: () => Observable<any>): Observable<any> {
    let toLoad = of(null);

    if (route.data && route.data.preload) {
      toLoad = routeLoading();
    }

    return toLoad;
  }

}
