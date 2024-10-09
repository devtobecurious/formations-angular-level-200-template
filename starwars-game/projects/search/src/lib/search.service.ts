import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialValue, SearchState } from './store';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root' // TreeShaking
})
export class SearchService {
  // Et si on passait aux signals ?
  // private readonly store = new BehaviorSubject<SearchState>(initialValue)
  private readonly store = signal<SearchState>(initialValue)

  dispatch(item: SearchState): void {
    this.store.set({ ...item }) // on controle la valeur de l'état
  }

  get asObservable(): Observable<SearchState> {
    return toObservable(this.store) // on ne peut que s'abonner
  }
}
