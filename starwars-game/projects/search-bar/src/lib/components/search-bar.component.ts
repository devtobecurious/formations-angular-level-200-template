import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarStore } from '../services/search-bar.store';

@Component({
  selector: 'lib-search-bar',
  imports: [FormsModule],
  template: `
    <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input [(ngModel)]="item" type="text" class="form-control bg-light border-0 small" placeholder="Recherche..."
              aria-label="Search" aria-describedby="basic-addon2" >
          <div class="input-group-append">
              <button class="btn btn-primary" type="button" (click)="search()" >
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `,
  styles: ``
})
export class SearchBarComponent {
  private readonly store = inject(SearchBarStore);
  item = signal('');

  search() {
    this.store.dispatch({ value: this.item() });
  }
}
