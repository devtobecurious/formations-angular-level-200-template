import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomLoadingRouteStrategy implements PreloadingStrategy {
  // private http = inject(HttpClient); DI

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    let result = of(null);

    if (route.data?.preload) {
      result = fn();
    }

    return result;
  }

}
