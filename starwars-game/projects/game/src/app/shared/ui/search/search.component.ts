import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchItem } from './models';
import { SearchService } from './services';

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
  item: SearchItem = { value: ''};

  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }

  clickToSearch(): void {
    this.service.search(this.item.value);
  }

}
