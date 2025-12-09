import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createSearch, Search } from './models/search';

export class ItemBarService<T extends {}> {
  private readonly store = new BehaviorSubject<T | undefined>(undefined);

  dispatch(value: T): void {
    this.store.next({ ...value });
  }

  get asObservable() {
    return this.store.asObservable();
  }
}

@Injectable({
  providedIn: 'root'
})
export class SearchBarService extends ItemBarService<Search> {
}
