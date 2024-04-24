import { computed, Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'}) // Singleton
export class TitleStore {
  store = signal<string>('Il était une fois');
  majuscule = computed(() => this.store().toUpperCase());

  update(value: string): void {
    this.store.set(value);
  }
}
