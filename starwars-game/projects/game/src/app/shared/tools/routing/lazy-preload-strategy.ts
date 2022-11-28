import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class LazyPreloadStrategy implements PreloadingStrategy {

  preload(route: Route, maRouteLazyLoade: () => Observable<any>): Observable<any> {
    let result = of(null);

    if (route.data?.isLoading) {
      result = maRouteLazyLoade();
    }

    return result;
  }
}
