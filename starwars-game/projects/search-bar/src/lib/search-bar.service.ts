import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  private readonly searchState = signal<string | undefined>(undefined);

  dispatch(content: string): void {
    this.searchState.set(content);
  }

  get stateAsReadonly() {
    return this.searchState.asReadonly();
  }
}
