import { computed, Injectable, Signal, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchItem } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {
  private store = signal<SearchItem>({ value: '' });

  update(item: SearchItem): void {
    this.store.set({ ... item }); // Approche non mutable
  }

  get asValue(): Signal<string> {
    return computed(() => this.store().value);
  }

  // get asObservable(): Observable<SearchItem> {
  //   return this.store.asObservable();
  // }
}
// export class SearchStateService {
//   private readonly store = new BehaviorSubject<SearchItem>({ value: '' });

//   update(item: SearchItem): void {
//     this.store.next({ ... item }); // Approche non mutable
//   }

//   get asObservable(): Observable<SearchItem> {
//     return this.store.asObservable();
//   }
// }
