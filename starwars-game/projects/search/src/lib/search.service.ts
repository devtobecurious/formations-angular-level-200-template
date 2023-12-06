import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchState, initialSearchState } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchBusService {
  private readonly store = new BehaviorSubject<SearchState>(initialSearchState);

  update(state: SearchState): void {
    this.store.next({... state});
  }

  get asObservable(): Observable<SearchState> {
    return this.store.asObservable();
  }
}
