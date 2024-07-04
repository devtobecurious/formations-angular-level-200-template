import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialValue, SearchState } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // 3. reducer / store
  private readonly searchStore = new BehaviorSubject<SearchState>(initialValue);

  // Mise à jour => C : Command
  dispatch(value: string): void {
    //this.searchStore.next({ value: value }); // je préviens tout le monde
    this.searchStore.next({ value }); //immutabilité => on construit un nouvel état !
  }

  // Lecture => R : Read
  get asObservable(): Observable<SearchState> {
    return this.searchStore.asObservable();
  }
}
