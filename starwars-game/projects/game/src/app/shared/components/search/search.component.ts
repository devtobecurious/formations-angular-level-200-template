import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchItem } from './models';
import { SearchService } from './services';

@Component({
  selector: 'game-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  item: SearchItem = { value: '' }

  constructor(private readonly service: SearchService) {}

  search(): void {
    this.service.search(this.item);
  }
}

@NgModule({
  declarations: [SearchComponent],
  imports: [
    FormsModule
  ],
  exports: [SearchComponent]
})
export class SearchModule {
}
