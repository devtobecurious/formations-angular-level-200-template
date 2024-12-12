import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { searchInitValue, SearchState } from './models/search-state';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  private readonly store = new BehaviorSubject(searchInitValue)

  dispatch(state: SearchState): void {
    this.store.next(state)
  }

  get asObservable() {
    return this.store.asObservable()
  }
}
