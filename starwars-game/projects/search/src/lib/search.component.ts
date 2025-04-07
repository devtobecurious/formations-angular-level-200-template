import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initialState, SearchState } from './models/search-state';
import { SearchStore } from './search.store';

//export const sharedToComponents = [AsyncPipe]

@Component({
  selector: 'lib-search',
  //imports: sharedToComponents,
    imports: [FormsModule],
  template: `
      <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input name="search" [(ngModel)]="item.value"  type="text" class="form-control bg-light border-0 small" placeholder="Recherche..."
              aria-label="Search" aria-describedby="basic-addon2" >
          <div class="input-group-append">
              <button class="btn btn-primary" (click)="search()" type="button" >
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
    </form>
  `,
  styles: ``
})
export class SearchComponent {
  private readonly service = inject(SearchStore)
  item: SearchState = { ... initialState, value: '' }

  search(): void {
    if(this.item.value) {
      this.service.dispatch(this.item.value)
    }
  }
}
