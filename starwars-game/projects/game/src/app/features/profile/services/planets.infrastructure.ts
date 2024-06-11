import { delay, map, Observable, of, tap } from "rxjs";
import { Planets } from "../models";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "projects/game/src/environments/environment";

type ApiItemResult = {
  name: string
}

type ApiResult = {
  results: ApiItemResult[]
}

const fakeInfra = {
  getAll(): Observable<Planets>{
    const table:Planets = []

    return of(table).pipe(delay(1500))
  }
}

@Injectable({
    providedIn: 'root',
    //useFactory: () => environment.production ? new PlanetsInfrastructure(): fakeInfra
    useValue: fakeInfra
})
export class PlanetsInfrastructure {
  private readonly http = inject(HttpClient)

  getAll(): Observable<Planets> {
   return this.http.get<ApiResult>('https://swapi.dev/api/planets').pipe(
    map(result => result.results.map(item => ({ id: 0, libelle: item.name }))),
    //tap(item => this.subject.next(false))
   )
  }
}
