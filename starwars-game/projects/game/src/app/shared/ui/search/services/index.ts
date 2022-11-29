import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  store = new BehaviorSubject<SearchItem>({ value: '' });

  constructor() { }

  search(value: string): void {
    const stateDuplique = { ... this.store.value };

    stateDuplique.value = value;
    // const tableau = [1, 2, 3 ];
    // const tab2 = [...tableau];

    this.store.next(stateDuplique);
  }
}
