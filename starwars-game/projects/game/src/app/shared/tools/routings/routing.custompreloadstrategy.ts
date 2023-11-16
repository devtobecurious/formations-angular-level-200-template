import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomPreloadModulesStrategy implements PreloadingStrategy {


  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    let returnObs$ = of(null);

    if( route.data?.preload ) {
      returnObs$ = fn();
    }

    return returnObs$;
  }

}
