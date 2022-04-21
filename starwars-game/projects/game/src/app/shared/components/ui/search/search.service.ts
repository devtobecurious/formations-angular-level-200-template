import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchType } from './search-item/search-item.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public store = new BehaviorSubject<SearchType>({ value: '' });

  constructor() {
  }

  search(value: SearchType) {
    this.store.next({ ...value });
  }
}
