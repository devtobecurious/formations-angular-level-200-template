import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Countries, Country } from '../models';
@Injectable({ providedIn: 'root' })
export class CountriesStore {
  private readonly internalStore$ = new BehaviorSubject<Countries>([]);
  private readonly oneCountryStore$ = new BehaviorSubject<Country | null>(null);


  set(countries: Countries) {
    this.internalStore$.next(countries);
  }

  setOne(country: Country) {
    this.oneCountryStore$.next(country);
  }

  get store() {
    return this.internalStore$.asObservable();
  }

  get selectedOne() {
    return this.oneCountryStore$.asObservable();
  }
}
