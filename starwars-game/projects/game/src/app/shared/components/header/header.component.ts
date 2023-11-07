import { Component, NgModule, OnInit } from '@angular/core';
import { SearchMainComponent } from '../search/search-main/search-main.component';

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
    HeaderComponent
  ],
  imports: [
    SearchMainComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderComponentModule { }

