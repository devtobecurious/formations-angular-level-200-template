import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { headers } from "../../shared";

export interface CountriesApiReturn {
  // countries: { [key: string]: string };
  countries: Record<string, string>;
};

@Injectable({ providedIn: 'root' })
export class CountriesInfrastructure {
  private readonly client = inject(HttpClient);

  getAll(): Observable<CountriesApiReturn> {
    return this.client.get<CountriesApiReturn>(`https://countries-cities.p.rapidapi.com/location/country/list`, { headers });
  }
}
