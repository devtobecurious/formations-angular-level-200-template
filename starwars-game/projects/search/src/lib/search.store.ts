import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { initialState, SearchState } from '../public-api';

@Injectable({
  providedIn: 'root'
})
export class SearchStore { // Reducer + etat
  //private readonly store = new BehaviorSubject<SearchState>(initialState) // on va le remplacer par un signal
  private readonly store = signal<SearchState>(initialState)
  private value = computed(() => this.store().value)

  dispatch(text: string): void { // c'est ce service qui met à jour et personne d'autre
    this.store.set({ // je clone toujours avant émission
      value: text
    })
  }

  get asValue() {
    return this.value
  }
}
