import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { SearchBarStore } from './store/search-bar.store';

@Component({
  selector: 'lib-search-bar',
  imports: [ReactiveFormsModule],
  template: `
      <form [formGroup]="searchForm"
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input  type="text" class="form-control bg-light border-0 small" placeholder="Recherche..."
              aria-label="Search" aria-describedby="basic-addon2" formControlName="value">
          <div class="input-group-append">
              <button class="btn btn-primary" type="button" >
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `,
  styles: ``
})
export class SearchBarComponent {
  private readonly formsBuilder = inject(FormBuilder);
  protected readonly searchForm = this.formsBuilder.group({
    value: ['', [Validators.required, Validators.minLength(3)]]
  });

  private readonly searchBarStore = inject(SearchBarStore);

  private readonly searchChange$ = this.searchForm.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    filter(value => this.searchForm.valid),
    tap(value => this.searchBarStore.dispatch({value: value.value!}))
  );

  ngOnInit() {
    this.searchChange$.subscribe({
      next: (val) => console.log('Search value changed and dispatched to store.', val),
    });
  }
}
