import { computed, Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TitreService {
  title = signal<string>('game');
  titleMajuscule = computed(()=> this.title().toUpperCase())
}
