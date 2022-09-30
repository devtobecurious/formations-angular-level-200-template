import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public store = new BehaviorSubject<string>('');

  constructor() { }

  search(value: string) {
    this.store.next(value);
  }
}
