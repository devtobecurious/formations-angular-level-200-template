import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchStoreService } from './services/search-store.service';

@Component({
  selector: 'game-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  //value = '<nouvelle valeur>'
  private readonly formBuilder = inject(FormBuilder)
  private readonly searchStore = inject(SearchStoreService)

  protected readonly frmSearch = this.formBuilder.nonNullable.group({
    search: ['', [Validators.required,  Validators.minLength(3)]],
  })

  search(): void {
    if(this.frmSearch.valid) {
      this.searchStore.dispatch(this.frmSearch.value.search!);
    }
  }
}
