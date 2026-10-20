import { Component, inject } from '@angular/core';
import { SearchStore } from '../design-system.store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  private readonly service = inject(SearchStore);
  protected value = '';

  update(): void {
    console.info('this.Value', this.value);
    this.service.dispatch(this.value);
  }
}
