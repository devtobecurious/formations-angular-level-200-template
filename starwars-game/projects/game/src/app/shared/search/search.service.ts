import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchType } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public state = new BehaviorSubject<SearchType>({ value: '' });

  constructor() { }

  search(value: SearchType) {
    this.state.next(value);
  }
}
