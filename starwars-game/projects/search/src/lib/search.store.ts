import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchState, getInitialSearchState, initialSearchState } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  private readonly store = new BehaviorSubject<SearchState>(getInitialSearchState());

  dispatch(newState: SearchState): void {
    this.store.next(newState);
  }

  get asObservable(): Observable<SearchState> {
    return this.store.asObservable();
  }
}
