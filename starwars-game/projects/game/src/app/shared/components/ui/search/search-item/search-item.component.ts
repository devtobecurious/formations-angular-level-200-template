import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';

export type SearchType = {
  value: string
}

@Component({
  selector: 'game-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  searchItem: SearchType = { value: '' };


  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.searchService.search(this.searchItem);
  }
}

@NgModule({
  declarations: [
    SearchItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchItemComponent
  ]
})
export class SearchModule { }
