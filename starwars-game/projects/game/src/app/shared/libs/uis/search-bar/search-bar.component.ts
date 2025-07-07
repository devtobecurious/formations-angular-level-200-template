import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'game-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  //value = '<nouvelle valeur>'
  private readonly formBuilder = inject(FormBuilder)

  protected readonly frmSearch = this.formBuilder.group({
    search: ['', Validators.required]
  })

  search(): void {
    console.log(this.frmSearch.value.search);
  }
}
