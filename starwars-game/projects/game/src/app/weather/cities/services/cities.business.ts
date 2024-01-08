import { Injectable, inject } from "@angular/core";
import { Observable, combineLatest, filter, map, of, switchMap, tap } from "rxjs";
import { Cities } from "../models";
import { CitiesStore } from "./cities.store";
import { CitiesInfrastructure } from "./cities.infrastructure";
import { CountriesStore } from "../../country/services/country.store";

@Injectable({ providedIn: 'root' })
export class CitiesBusiness {
  private readonly store = inject(CitiesStore);
  private readonly infrastructure = inject(CitiesInfrastructure);
  private readonly oneCountryStore = inject(CountriesStore);

  private getAllWithCountryCode(country: { code: string }): Observable<Cities> {
    return this.infrastructure.getAll(country.code).pipe(
      map(item => item.cities.map(cityApi => ({ id: 0, name: cityApi.name, country: '', coord: { lon: cityApi.longitude, lat: cityApi.latitude } }))),
      tap(cities => this.store.set(cities))
    );
  }

  getAll(): Observable<Cities> {
    return this.oneCountryStore.selectedOne.pipe(
      //map(country => country ? country : { code: '' }),
      filter(country => country !== null),
      switchMap(country => this.getAllWithCountryCode(country!))
    );

    // return combineLatest({
    //   city: this.store.store,
    //   country: this.oneCountryStore.selectedOne
    // }).pipe()


  }
}
