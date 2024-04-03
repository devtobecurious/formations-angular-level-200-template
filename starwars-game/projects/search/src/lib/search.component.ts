import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchItem } from './models';
import { SearchService } from './search.service';

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {
  //#region Fields
  private readonly service = inject(SearchService); // > angular 16 +
  item: SearchItem = { value: '' }
  //#endregion

  //#region Public methods
  search(): void {
    this.service.search(this.item.value);
  }
  //#endregion
}
