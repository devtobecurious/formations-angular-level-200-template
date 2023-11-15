import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WithValue } from './models';
import { SearchStoreService } from './services';

export const factoryMyService = () => {
  return {
    store: inject(SearchStoreService)
  }
}

@Component({
  selector: 'game-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchItem: WithValue = {
    value: ''
  };

  private searchStore = factoryMyService().store; // Environnement de construction

  search(): void {
    this.searchStore.save({ ...this.searchItem });
  }
}
