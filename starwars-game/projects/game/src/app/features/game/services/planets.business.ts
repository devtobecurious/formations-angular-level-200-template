import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Planet, Planets } from "../store/planets.store";
import { Observable, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";
import { addPlanetsAction } from "../store/planets.actions";
import { selectAllPlanetsWithSurfaceWater } from "../store/planets.selectors";

@Injectable({providedIn: 'root'})
export class PlanetsBusiness {
  private readonly http = inject(HttpClient);
  private readonly store = inject(Store<ApplicationState>);

  init(): Observable<Planets> {
    return this.http.get<Planets>('https://swapi.dev/api/planets').pipe(
      tap(result => this.store.dispatch(addPlanetsAction({items: result.results})))
    );
  }

  getAll(): Observable<Planet[]> {
    return this.store.select(selectAllPlanetsWithSurfaceWater);
  }
}
