import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { SearchState, initialSearchState } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  private readonly store = new BehaviorSubject<SearchState>(initialSearchState);

  /**
   * dsfsdfdsfsd
   * @param value
   */
  update(value: string): void {
    this.store.next({
      value
    });
  }

  get asObservable(): Observable<SearchState> {
    return this.store.asObservable();
  }
}
