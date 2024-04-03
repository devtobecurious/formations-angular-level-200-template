import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgFor],
  selector: 'game-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}

// jusqu'à angular 14
// @NgModule({
//   declarations: [SearchComponent],
//   imports: [
//     CommonModule
//   ],
//   exports: [SearchComponent]
// })
// export class SearchModule { }
