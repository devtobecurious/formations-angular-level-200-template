import { Component, NgModule, OnInit } from '@angular/core';
import { SearchComponent } from 'search';

@Component({
    selector: 'game-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [SearchComponent]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


