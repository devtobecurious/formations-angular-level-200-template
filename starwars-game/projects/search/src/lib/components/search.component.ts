import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initialValue, SearchState } from '../store';
import { SearchStore } from '../store/search.store';

@Component({
  selector: 'lib-search',
  imports: [FormsModule],
  template: `
      <form
          class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
              <input name="search" type="text" [(ngModel)]="state.item" class="form-control bg-light border-0 small" placeholder="Recherche..."
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
  protected state: SearchState = {...initialValue}
  private readonly store = inject(SearchStore)

  search(): void {
    if(this.state.item) {
      this.store.dispatch(this.state.item)
    }
  }
}
