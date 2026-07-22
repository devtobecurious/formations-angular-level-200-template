import { Injectable } from '@angular/core';
import { SearchValue } from '../models/search-value';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarStore {
  private readonly store = new BehaviorSubject<SearchValue | null>(null);
  
  dispatch(value: SearchValue | null) {
    this.store.next(value);
  }

  get asObservable$() {
    return this.store.asObservable();
  }
}
