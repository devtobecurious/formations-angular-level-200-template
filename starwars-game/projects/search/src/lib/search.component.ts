import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

//export const sharedToComponents = [AsyncPipe]

@Component({
  selector: 'lib-search',
  //imports: sharedToComponents,
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

}
