import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchStoreService } from './search-store.service';

@Component({
  selector: 'mlb-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {// le composant standalone doit être vu comme un module
  private readonly store = inject(SearchStoreService);
  value = '';

  search(): void {
    this.store.update(this.value);
  }
}
