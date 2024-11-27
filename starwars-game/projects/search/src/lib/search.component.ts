import { Component, inject } from '@angular/core';
import { searchInitValue, SearchState } from './models';
import { FormsModule } from '@angular/forms';
import { SearchStore } from './search.store';

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input name="search" [(ngModel)]="item.value" type="text" class="form-control bg-light border-0 small" placeholder="Recherche..."
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
export class SearchComponent {
  private readonly store = inject(SearchStore)
  item: SearchState = searchInitValue

  search(): void {
    this.store.dispatch(this.item)
  }
}
