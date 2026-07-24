import { Component, inject } from '@angular/core';
import { GetAllCharacters } from '../../services/get-all-characters';
import { OneCharacterStore } from '../../services/one-character-store';

@Component({
  selector: 'app-display-all-characterss',
  imports: [],
  templateUrl: './display-all-characterss.html',
  styleUrl: './display-all-characterss.css',
  providers: [GetAllCharacters]
})
export class DisplayAllCharacters {
  protected readonly service = inject(GetAllCharacters);
  private readonly store = inject(OneCharacterStore);

  selectId(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    this.store.dispatch(+selectedId);
  }
}
