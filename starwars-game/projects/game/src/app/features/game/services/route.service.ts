import { Observable, of } from 'rxjs';
import { inject, Injectable, isDevMode } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Injectable(
  {
    providedIn: 'root',
    useFactory: () => isDevMode() ? new SpecificRouteAvecLicorne() :
      new RouteService()
  }
)
export class RouteService {
  private routeActive = inject(ActivatedRoute);

  getParams(): Observable<Params> {
    return this.routeActive.params;
  }
}

export class SpecificRouteAvecLicorne extends RouteService {
  getParams(): Observable<Params> {
    return of({ test: '' })
  }
}
