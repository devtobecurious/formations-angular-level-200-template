import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { initialSearchItemState, SearchItemState } from '../store/search-item-state';
import { SearchItem } from '../models/search-item';

@Injectable({
  providedIn: 'root'
})
export class SearchBarStore {
  private readonly store = new BehaviorSubject<SearchItemState>(initialSearchItemState);
  //private readonly store = new Subject<SearchItemState>();

  dispatch(state: SearchItem) {
    this.store.next({ item: state, loading: false, error: null });
  }

  get asObservable() {
    return this.store.asObservable();
  }
}
