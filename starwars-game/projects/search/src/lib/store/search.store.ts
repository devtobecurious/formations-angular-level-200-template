import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialValue, SearchState } from '.';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  private readonly store = new BehaviorSubject<SearchState>(initialValue)

  dispatch(item: string): void {
    this.store.next({item})
  }

  get asObservable(): Observable<SearchState> {
    return this.store.asObservable()
  }

}
