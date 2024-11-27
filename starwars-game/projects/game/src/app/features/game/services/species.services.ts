import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { resultMemoize } from "@ngrx/store";
import { map, Observable, shareReplay } from "rxjs";
import { Species } from "../models/species";

type SpecieApiResult = {
  name: string
}

type ApiResult = {
  results: SpecieApiResult[]
}

@Injectable()
export class SpeciesInfrastructure {
  private readonly http = inject(HttpClient)
  private readonly items$ = this.http.get<ApiResult>('https://swapi.dev/api/species').pipe(
    map(result => result.results.map(res => ({ label: res.name }))),
    shareReplay(1)
  )

  getAll(): Observable<Species> {
    return this.items$
  }
}
