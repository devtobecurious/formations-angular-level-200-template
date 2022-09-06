import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // standalone: true,
  // imports: [
  //   CommonModule,
  //   SearchComponent
  // ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SearchComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class SearchModule { }
