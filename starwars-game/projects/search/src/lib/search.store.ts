import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';
import { initialValue, SearchState } from './models';

@Injectable({
  providedIn: 'root' // Tree shaking : si pas appelé ailleurs, pas compilé, donc pas de js généré
})
export class SearchStore {
  // Hot observable => elle partage ses données à tous les subscripteurs
  private readonly store = new BehaviorSubject<SearchState>(initialValue) // Gestion d'état

  dispatch(item: SearchState): void {
    this.store.next({...item}) // toujours cloner => im-mutable // on prévient
  }

  get asObservable() {
    return this.store.asObservable() // on écoute
  }
}
