import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // ca crée un singleton dans l'application
})
export class SearchService {
  public state = new BehaviorSubject<string>('');

  constructor() {
  }

  search(item: string): void {
    this.state.next(item);
  }
}
