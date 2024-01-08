import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { headers } from "../../shared";

type OneCityApiReturn = {
  latitude: number;
  longitude: number;
  name: string;
}

type CitiesApiReturn = {
  cities: OneCityApiReturn[];
}

@Injectable({ providedIn: 'root' })
export class CitiesInfrastructure {
  private readonly client = inject(HttpClient);
  getAll(countryCode: string): Observable<CitiesApiReturn> {
    if (countryCode === '') {
      // return new Observable<CitiesApiReturn>(subscriber => {
      //   subscriber.next({ cities: [] });
      //   subscriber.complete();
      // });
      return of({ cities: [] });
    }

    return this.client.get<CitiesApiReturn>(`https://countries-cities.p.rapidapi.com/location/country/${countryCode}/city/list`, { headers });
  }

}
