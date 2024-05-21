import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchItem } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {
  private readonly store = new BehaviorSubject<SearchItem>({ value: '' });

  update(item: SearchItem): void {
    this.store.next({ ... item }); // Approche non mutable
  }

  get asObservable(): Observable<SearchItem> {
    return this.store.asObservable();
  }
}
