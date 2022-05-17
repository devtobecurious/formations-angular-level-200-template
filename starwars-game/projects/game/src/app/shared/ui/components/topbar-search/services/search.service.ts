import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from '../topbar-search.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public store = new BehaviorSubject<string>('');

  constructor() { }

  search(item: SearchItem) {
    this.store.next(item.value);
  }
}
