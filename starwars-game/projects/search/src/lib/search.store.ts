import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { initialValue, SearchState } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  private readonly store = new BehaviorSubject<SearchState>(initialValue)

  dispatch(newValue: SearchState): void {
    this.store.next({...newValue})
  }

  get asObservable() {
    return this.store.asObservable()
  }
}
