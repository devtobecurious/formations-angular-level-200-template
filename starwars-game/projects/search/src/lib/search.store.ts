import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initSearchValue, SearchState } from './store';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  private readonly store = new BehaviorSubject<SearchState>(initSearchValue)

  dispatch(value: string): void {
    this.store.next({ value })
  }

  get asObservable(): Observable<SearchState> {
    return this.store.asObservable()
  }
}
