import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly store = new BehaviorSubject<string>('');

  search(query: string): void {
    this.store.next(query);
  }

  get asObservable(): Observable<string> {
    return this.store.asObservable();
  }
}
