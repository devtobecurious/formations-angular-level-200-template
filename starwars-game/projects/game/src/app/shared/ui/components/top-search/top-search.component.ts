import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';

export type SearchType = {
  value: string
};

@Component({
  selector: 'game-top-search',
  templateUrl: './top-search.component.html',
  styleUrls: ['./top-search.component.css']
})
export class TopSearchComponent implements OnInit {
  searchItem: SearchType = { value: '' };

  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }

  clickToSearch() {
    this.service.onSearch(this.searchItem.value);
  }
}


@NgModule({
  declarations: [
    TopSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TopSearchComponent
  ]
})
export class TopSearchModule { }
