import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class WithDataConfigPreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, executionLazyRoute: () => Observable<any>): Observable<any> {
    let result = of(null);

    if (route.data?.isPreload) {
        result = executionLazyRoute();
    }

    return result;
  }

}
