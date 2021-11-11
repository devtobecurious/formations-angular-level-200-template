import { SearchService } from './../../services/search.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  searchResult = '';

  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }

  search() {
    this.service.searchValue(this.searchResult);
  }
}
