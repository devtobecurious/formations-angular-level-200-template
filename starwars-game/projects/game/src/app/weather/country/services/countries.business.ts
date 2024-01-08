import { Injectable, inject } from "@angular/core";
import { CountriesInfrastructure } from "./countries.infrastructure";
import { Observable, map, tap } from "rxjs";
import { Countries } from "../models";
import { CountriesStore } from "./country.store";

@Injectable({ providedIn: 'root' })
export class CountriesBusiness {
  private readonly infra = inject(CountriesInfrastructure);
  private readonly store = inject(CountriesStore);

  getAll(): Observable<Countries> {
    return this.infra.getAll().pipe(
      map(result => {
        const countries = Object.entries(result.countries).map(([key, value]) => ({ code: key, name: value }));
        return countries;
      }),
      tap(countries => this.store.set(countries))
    );
  }
}
