import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class ManualPreloadModules implements PreloadingStrategy {

  preload(route: Route, lazyRoute: () => Observable<any>): Observable<any> {
    let executeReturn = of(null)

    if(route.data?.toLoad) {
      executeReturn = lazyRoute()
    }

    return executeReturn
  }

}
