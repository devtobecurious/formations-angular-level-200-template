import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialValue, SearchState } from './store';

@Injectable({
  providedIn: 'root' // TreeShaking
})
export class SearchService {
  // Et si on passait aux signals ?
  private readonly store = new BehaviorSubject<SearchState>(initialValue)

  dispatch(item: SearchState): void {
    this.store.next({ ...item }) // on controle la valeur de l'état
  }

  get asObservable(): Observable<SearchState> {
    return this.store.asObservable() // on ne peut que s'abonner
  }
}
