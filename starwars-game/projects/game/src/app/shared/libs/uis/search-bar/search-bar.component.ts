import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'game-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  value = '<nouvelle valeur>'

  search(): void {
    console.log(this.value);
  }
}
