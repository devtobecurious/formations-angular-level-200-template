import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchItem } from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // c'est un singleton !!
})
export class SearchService {
  // private readonly http = inject(HttpClient);
  private readonly store = new BehaviorSubject<SearchItem>({value: ''});

  search(value: string): void {
    this.store.next({ value });
  }

  asObservable(): Observable<SearchItem> {
    return this.store.asObservable();
  }
}
