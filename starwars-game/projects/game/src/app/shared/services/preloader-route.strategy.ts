import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class PreloaderRouteStrategy implements PreloadingStrategy {

  preload(route: Route, runPreloading: () => Observable<any>): Observable<any> {
    let result$ = of(null); // ici on garde le comportement par défaut du lazy loading

    if(route.data?.isLoadedAfterMain) {
      result$ = runPreloading();
    }

    return result$;
  }

}
