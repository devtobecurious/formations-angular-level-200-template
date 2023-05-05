import { SearchType } from './../models/index';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private state = new BehaviorSubject<SearchType>({ value: '' });

  get value(): SearchType {
    return this.state.value;
  }

  search(value: SearchType): void {
    this.state.next(value);
  }

  get asObservable(): Observable<SearchType> {
    return this.state.asObservable();
  }
}


export const factorySearchService = () => inject(SearchService);
