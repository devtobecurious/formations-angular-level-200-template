import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchItem } from './models/search-item';

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [
    FormsModule //TdF
  ],
  template: `
  <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input name="search" [(ngModel)]="searchItem.value" type="text" class="form-control bg-light border-0 small" placeholder="Recherche..."
              aria-label="Search" aria-describedby="basic-addon2" >
          <div class="input-group-append">
              <button (click)="dispatch()" class="btn btn-primary" type="button" >
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `
})
export class SearchComponent {
  searchItem: SearchItem = { value: '' };

  dispatch(): void {
    console.info('plouf');
  }
}


// SCAM avant angular 15
// @Component({
//   selector: 'lib-search',
//   template: `
//     <p>
//       search works!
//     </p>
//   `,
//   styles: [
//   ]
// })
// export class SearchComponent {

// }

// @NgModule({
//   declarations: [
//     SearchComponent
//   ],
//   imports: [
//   ],
//   exports: [
//     SearchComponent
//   ]
// })
// export class SearchModule { }
