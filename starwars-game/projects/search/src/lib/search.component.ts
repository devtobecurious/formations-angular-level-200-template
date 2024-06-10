import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchService } from './search.service';

export const fabricService = {
  search: inject(SearchService)
}


@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [],
  template: `
     <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input type="text" class="form-control bg-light border-0 small" placeholder="Recherche..."
              aria-label="Search" aria-describedby="basic-addon2" >
          <div class="input-group-append">
              <button class="btn btn-primary" type="button" >
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `,
  styles: ``
})
export class SearchComponent {
  private readonly service = inject(SearchService);
  // private readonly service = fabricService.search;
  /**
   *
   */
  // constructor(private readonly service: SearchService) {}

}
