import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchItem } from './models';

@Component({
  selector: 'game-search-bis',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, FormsModule],
  templateUrl: './search-bis.component.html',
  styleUrls: ['./search-bis.component.css']
})
export class SearchBisComponent {
  private search: SearchItem = {
    value: ''
  };


}
