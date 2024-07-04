import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
    selector: 'lib-search',
    template: `
   <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input name="search" type="text" class="form-control bg-light border-0 small" placeholder="Recherche..."
              aria-label="Search" aria-describedby="basic-addon2" [(ngModel)]="value" >
          <div class="input-group-append">
              <button class="btn btn-primary" type="button" (click)="search()">
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `,
    styles: [],
    imports: [FormsModule],
    standalone: true
})
export class SearchComponent {
  private readonly store = inject(SearchService);
  value = '';

  search(): void {
    this.store.dispatch(this.value);
  }
}
