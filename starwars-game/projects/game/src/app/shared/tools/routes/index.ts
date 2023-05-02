import { PreloadingStrategy, Route } from "@angular/router"
import { Observable, of } from "rxjs";


// export type AfficherFunction = (param: string) => void;
// const afficheConsole: AfficherFunction = console.log;
// afficheConsole('Hello World');

export type LazyLoadFunction = () => Observable<any>;
export class WithFlagLazyLoadingModuleStrategy implements PreloadingStrategy {

  preload(route: Route, lazyLoadedRouteAction: LazyLoadFunction): Observable<any> {
    let result = of(null);

    if (route.data && route.data.preload) {
      result = lazyLoadedRouteAction();
    }

    return result;
  }

}
