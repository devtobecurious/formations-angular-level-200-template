import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialValue, SearchState } from './store';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly store = new BehaviorSubject<SearchState>(initialValue);

  dispatch(query: string): void {
    const newState = { ... this.store.value, item: { value: query } }

    console.info(newState)

    this.store.next(newState);
  }

  get asObservable(): Observable<SearchState> {
    return this.store.asObservable();
  }
}
