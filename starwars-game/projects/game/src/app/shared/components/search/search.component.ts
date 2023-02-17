import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchItem } from './models';
import { SearchService } from './services/search.service';

@Component({
  selector: 'game-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  private readonly searchService = inject(SearchService);

  item: SearchItem = {
    value: ''
  };

  search(): void {
    this.searchService.search({ ... this.item });
  }
}
