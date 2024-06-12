import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchState } from './models';

// pour exemple, elle sert pas en fait ,)
// const value = {
//   valeur: ''
// }

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  //private readonly store = new BehaviorSubject<SearchState>({ value: '' });
  private readonly store = signal<SearchState>({ value: '' });
  valueToLower = computed(() => this.store().value.toLowerCase());

  dispatch(value: SearchState): void {
    this.store.set(value);
  }

  // get asObservable(): Observable<SearchState> {
  //   return this.store.asObservable();
  // }

  // set asObservable(value: Observable<any>) {

  // }
}
