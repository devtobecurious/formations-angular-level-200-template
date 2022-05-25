import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchType } from './top-search.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public store = new BehaviorSubject<SearchType>({ value: ''});

  constructor() { }

  public onSearch(value: string) {
    this.store.next({ value });
  }
}
