import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
  selector: 'game-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue !: string;
  // searchValue : string | undefined;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.searchService.search(this.searchValue);

    // if (typeof(this.searchValue) != 'undefined') {
    console.info(this.searchValue);
    // }
  }

}
