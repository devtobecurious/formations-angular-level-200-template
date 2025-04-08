import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    console.info('CustomPreloadingStrategy')

    return route.data && route.data.prefetch ?
           load() :
           of(null);
  }
}
