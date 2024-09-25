import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchItem } from './models/search-item';

// Tree shackable
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly initialValue: SearchItem = {value: ''}
  private readonly store = new BehaviorSubject<SearchItem>(this.initialValue);

  dispatch(value: SearchItem): void { // Command
    this.store.next({ ...value })
  }

  get asObservable(): Observable<SearchItem> { // Query
    return this.store.asObservable();
  }
}
