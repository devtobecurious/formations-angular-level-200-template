import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class CustomLazyLoadingStrategy implements PreloadingStrategy {

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    let result: Observable<any> = of(null);

    if (route.data?.preload) { // travailler des pistes de par exemple : si je suis en 3G ou pas
      result = fn(); // j'appelle de mon module qui est présent sur le serveur, au démarrage de l'application
    }

    return result;
  }

}
