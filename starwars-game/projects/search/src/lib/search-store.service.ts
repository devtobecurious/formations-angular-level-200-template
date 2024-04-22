import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Tree shaking : on compile ce service que lorsqu'il est VRAIMENT appelé dans un constructor d'un composant
})
export class SearchStoreService {
  private readonly store = new BehaviorSubject<string>('');

  // Ecrire et prévenir
  update(value: string): void {
    this.store.next(value);
  }

  // Abonnement
  asObservable(): Observable<string> {
    return this.store.asObservable();
  }
}
