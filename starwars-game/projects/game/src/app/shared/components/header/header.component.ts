import { Component, NgModule, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    SearchComponent
  ],
  providers: [],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
