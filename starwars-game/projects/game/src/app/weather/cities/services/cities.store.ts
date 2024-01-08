import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cities, City } from "../models";

@Injectable({ providedIn: 'root' })
export class CitiesStore {
  private readonly internalStore$ = new BehaviorSubject<Cities>([]);
  private readonly selectedOneCity$ = new BehaviorSubject<City | null>(null);

  set(cities: Cities): void {
    this.internalStore$.next(cities);
  }

  setOne(city: City): void {
    this.selectedOneCity$.next(city);
  }

  selectOne(name: string): City | undefined {
    const cities = this.internalStore$.value;
    return cities.find(city => city.name === name);
  }

  readonly store = this.internalStore$.asObservable();
  readonly selectedOne = this.selectedOneCity$.asObservable();
}
