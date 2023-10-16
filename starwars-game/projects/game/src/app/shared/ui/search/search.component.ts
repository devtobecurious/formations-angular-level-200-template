import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'game-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

}

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
