import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchState, initialState } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  private readonly store$ = new BehaviorSubject<SearchState>(initialState);

  dispatch(value: string): void {
    const newState: SearchState = { // immutabilité
      value
    };
    this.store$.next(newState);
  }

  get asObservable(): Observable<SearchState> {
    return this.store$.asObservable();
  }

}
