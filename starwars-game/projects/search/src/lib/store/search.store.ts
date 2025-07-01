import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialValue, SearchState } from '.';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  private readonly store = signal<SearchState>(initialValue)

  dispatch(item: string): void {
    this.store.set({item})
  }

  get format() {
    return computed(() => this.store().item?.toUpperCase())
  }

}
