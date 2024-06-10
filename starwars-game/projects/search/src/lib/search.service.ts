import { Injectable } from '@angular/core';
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
  private readonly store = new BehaviorSubject<SearchState>({ value: '' });


  dispatch(value: SearchState): void {
    this.store.next(value);
  }

  get asObservable(): Observable<any> {
    return this.store.asObservable();
  }

  // set asObservable(value: Observable<any>) {

  // }
}
