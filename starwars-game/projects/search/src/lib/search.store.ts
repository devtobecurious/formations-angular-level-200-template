import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {searchInitValue, SearchState} from './models'

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  // Temps 3 : on initialise le "reducer" => ici, c'est un "container store reducer"
  private readonly store = new BehaviorSubject<SearchState>(searchInitValue)

  // A pour but de mettre à jour le store avec une nouvelle version de mon état
  dispatch(newState: SearchState): void {
    this.store.next(newState) // Je préviens tout le monde qui est abonné à mon store/reducer
  }

  get asObservable(): Observable<SearchState> {
    return this.store.asObservable()
  }
}
