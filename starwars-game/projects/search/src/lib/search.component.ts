import { Component, inject } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'lib-search',
  template: `
   <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input name="searchValue" [(ngModel)]="searchValue" class="form-control bg-light border-0 small" placeholder="Recherche..."
              aria-label="Search" (change)="search()" aria-describedby="basic-addon2" >
          <div class="input-group-append">
              <button class="btn btn-primary" type="button" (click)="search()" >
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `,
  styles: [
  ]
})
export class SearchComponent {
  searchValue = ''
  private readonly searchService = inject(SearchService)

  search(): void {
    this.searchService.dispatch(this.searchValue)
  }
}
