import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchItem } from './models';
import { environment } from 'projects/game/src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface SearchStateService {
  setNewValue(value: string): void;
  asObservable: Observable<SearchItem>;
}

const fakeSearchStateService: SearchStateService = {
  asObservable: new Observable<SearchItem>(),

  setNewValue(value: string): void {
    throw new Error('Method not implemented.');
  }
}

@Injectable({
  providedIn: 'root',
 // useValue: environment.production ? {} : fakeSearchStateService
 useFactory: (client: HttpClient) => environment.production ? {} : fakeSearchStateService
})
export class SearchbisStateService implements SearchStateService {
  private store = new BehaviorSubject<SearchItem>({value: ''});

  setNewValue(value: string): void {
    this.store.next({value});
  }

  get asObservable(): Observable<SearchItem> {
    return this.store.asObservable();
  }
}
