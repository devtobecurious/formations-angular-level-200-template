import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, lazyLoadCall: () => Observable<any>): Observable<any> {
    if(route.data?.isLoading) {
      return lazyLoadCall()
    } else {
      return of(null)
    }
  }

}
