import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchState } from './models';
import { SearchStore } from './search.store';

export function createStore() {
  return {
    store: inject(SearchStore)
  }
}

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <p>
      <input  #searchInput type="text" [(ngModel)]="item.value"><button (click)="search()">Rechercher</button>
    </p>
  `,
  styles: ``
})
export class SearchComponent {
  private store = createStore().store;
  @ViewChild('searchInput', {static: true}) searchInput !: ElementRef<HTMLInputElement>;

  item: SearchState = {
    value: ''
  }

  search(): void {
    if (typeof(this.item.value) !== 'undefined') { // type guard
      this.store.update(this.item.value);
    }
  }

  ngOnInit(): void {
      this.searchInput.nativeElement.value;// Ici risque de faille js ! Il faut aller voir le Sanitizer
  }
}
