import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // standalone: true,
  // imports: [
  //   CommonModule
  // ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// on fait un scam
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SearchComponent  // c'est un standalone component
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderComponentModule {
}
