import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { searchInitialState, SearchState } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  private readonly store = new BehaviorSubject<SearchState>(searchInitialState);

  // Command
  dispatch(value: string): void {
    this.store.next({ value });
  }

  // Query
  asObservable(): Observable<SearchState> {
    return this.store.asObservable().pipe(
      distinctUntilChanged()
    );
  }
}
