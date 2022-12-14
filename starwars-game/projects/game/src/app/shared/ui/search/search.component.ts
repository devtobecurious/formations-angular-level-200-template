import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchItem } from './models';
import { SearchService } from './search.service';

@Component({
  selector: 'game-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem: SearchItem = { value: '' };

  constructor(private readonly searchService: SearchService) { }

  ngOnInit(): void {
  }

  clickToSearch(): void {
    this.searchService.search(this.searchItem.value);
  }

}
