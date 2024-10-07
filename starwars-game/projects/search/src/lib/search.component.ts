import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initialValue, SearchState } from './store';
import { SearchService } from './search.service';
import { JsonPipe } from '@angular/common';

// const injectItems = {
//   search: inject(SearchService)
// }

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  template: `
    <label> {{ state | json }} </label>
    <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input name="search" type="text" [(ngModel)]="state.item" class="form-control bg-light border-0 small" placeholder="Recherche..."
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
  state = initialValue
  private readonly service = inject(SearchService)
  private ochestror = {
    search: inject(SearchService)
  }

  search(): void {
    this.service.dispatch(this.state)
  }
}
