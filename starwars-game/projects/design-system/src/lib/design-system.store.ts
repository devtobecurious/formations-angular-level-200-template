import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  private readonly store = signal<string>('');

  dispatch(value: string) {
    this.store.set(value);
  }

  get asReadonly(): Signal<string> {
    return this.store.asReadonly();
  }
}
