import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { SearchItem } from './models';

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [FormsModule],
  template: `
      <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input type="text" class="form-control bg-light border-0 small" [(ngModel)]="item.value" placeholder="Recherche..."
              aria-label="Search" aria-describedby="basic-addon2" >
          <div class="input-group-append">
              <button class="btn btn-primary" type="button" (click)="search()">
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `,
  styles: ``
})
export class SearchComponent {
  item = new SearchItem();

  search(): void {

  }
}
