import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';

/**
 *
 */
export type SearchItem = {
  value: string
}

@Component({
  selector: 'game-topbar-search',
  templateUrl: './topbar-search.component.html',
  styleUrls: ['./topbar-search.component.css']
})
export class TopbarSearchComponent implements OnInit {
  item: SearchItem = { value: ''};

  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.service.search(this.item);
  }

}

@NgModule({
  declarations: [
    TopbarSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TopbarSearchComponent
  ]
})
export class TopbarSearchModule { }
