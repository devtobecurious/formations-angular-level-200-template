import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchItem } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private state = new BehaviorSubject<SearchItem>({ value: '' });

  constructor() { }

  get observable(): Observable<SearchItem> {
    return this.state.asObservable();
  }

  search(value: string): void {
    // this.state.next({ value: value });
    this.state.next({ value });
  }
}
