import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchItem, initialSearchState } from '../models';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private state = new BehaviorSubject<SearchItem>(initialSearchState);

  search(value: SearchItem): void {
    this.state.next(value);
  }

  get stateReadonly(): Observable<SearchItem> {
    return this.state.asObservable();
  }
}
