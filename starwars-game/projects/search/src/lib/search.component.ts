import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchState } from './models';

@Component({
  selector: 'lib-search',
  template: `
    <form
          class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
              <input name="search" [(ngModel)]="state.value" type="text" class="form-control bg-light border-0 small" placeholder="Recherche..."
                  aria-label="Search" aria-describedby="basic-addon2" >
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
  state = new SearchState();

  search(): void {

  }
}

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
