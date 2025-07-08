import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, preFetch: () => Observable<any>): Observable<any> {

    //const is3g = navigator.connection?.effectiveType === '3g' || navigator.connection?.effectiveType === '2g'
    
    // if '3g '
    if (route.data?.['preload']) {
      return preFetch()
    }
    return of(null)
  }
}
