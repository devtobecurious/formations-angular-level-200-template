import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, lazyLoading: () => Observable<any>): Observable<any> {
    let result = of(null);

    if(route.data?.preload) {
      result = lazyLoading();
    }

    return result;
  }

}
