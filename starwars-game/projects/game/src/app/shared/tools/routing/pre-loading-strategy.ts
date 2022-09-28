import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class PreLoadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    let result: Observable<any> = of(null);

    if (route.data?.preloading) {
      result = fn();
    }

    return result;
  }

}
