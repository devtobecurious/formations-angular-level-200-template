import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initialValue } from './models';
import { SearchStore } from './search.store';

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [FormsModule],
  template: `
  <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input name="value" type="text" class="form-control bg-light border-0 small" placeholder="Recherche..."
              aria-label="Search" aria-describedby="basic-addon2" [(ngModel)]="item.value">
          <div class="input-group-append">
              <button (click)="search()" class="btn btn-primary" type="button" >
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `,
  styles: ``
})
export class SearchComponent { // Thin component
  item = initialValue
  private readonly store = inject(SearchStore)

  search(): void  {
    this.store.dispatch(this.item)
  }
}
