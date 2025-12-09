import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createSearch } from './models/search';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'pfd-search-bar',
  imports: [FormsModule],
  template: `
     <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input type="text" class="form-control bg-light border-0 small" [(ngModel)]="searchItem" placeholder="Recherche..."
              aria-label="Search" aria-describedby="basic-addon2" >
          <div class="input-group-append">
              <button class="btn btn-primary" type="button" (click)="dispatch()">
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `,
  styles: ``
})
export class SearchBarComponent {
  protected searchItem = createSearch();
  private readonly service = inject(SearchBarService);

  dispatch(): void {
    this.service.dispatch(this.searchItem);
  }
}
