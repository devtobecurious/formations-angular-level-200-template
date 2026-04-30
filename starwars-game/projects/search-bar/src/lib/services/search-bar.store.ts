import { toObservable } from '@angular/core/rxjs-interop';
import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { initialSearchItemState, SearchItemState } from '../store/search-item-state';
import { SearchItem } from '../models/search-item';

@Injectable({
  providedIn: 'root'
})
export class SearchBarStore {
  //private readonly store = new BehaviorSubject<SearchItemState>(initialSearchItemState);
  private readonly store = signal<SearchItemState>(initialSearchItemState);
  private readonly obs$ = toObservable(this.store);

  item = computed(() => this.store().item);
  isLoading = computed(() => this.store().loading);
  error = computed(() => this.store().error);
  //private readonly store = new Subject<SearchItemState>();

  dispatch(state: SearchItem) {
    this.store.set({ item: state, loading: false, error: null });
  }

  get asObservable() {
    return this.obs$;
  }
}
