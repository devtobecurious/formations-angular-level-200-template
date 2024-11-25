import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() searchValue = new EventEmitter();

  search(): void
  {
    const searchInputValue: string = (<HTMLInputElement>document.getElementById("searchInput")).value;

    this.searchValue.emit(searchInputValue);
  }

}
