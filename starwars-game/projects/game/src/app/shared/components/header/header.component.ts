import { Component, NgModule, OnInit } from '@angular/core';
import {SearchComponent} from 'search';

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

@NgModule({ declarations: [
  HeaderComponent,
],
imports: [
  SearchComponent
],
exports: [
  HeaderComponent
]
})
export class HeaderModule { }
