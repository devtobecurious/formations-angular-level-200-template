import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchStore } from './search.store';

@Component({
  imports: [FormsModule],
  selector: 'lib-design-system',
  styles: `
    :host {
      display: block;
      color: #fff1c2;
      font-family: "Courier New", monospace;
    }

    .archive-search {
      display: flex;
      width: min(100%, 24rem);
      min-height: 2.75rem;
      border: 2px solid #627653;
      background: #101923;
      box-shadow: 3px 3px 0 #030609;
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      clip-path: inset(50%);
    }

    .archive-search input {
      min-width: 0;
      flex: 1;
      padding: 0.65rem 0.75rem;
      border: 0;
      border-radius: 0;
      outline: 0;
      background: #0b1315;
      color: #fff1c2;
      font: inherit;
      font-size: 0.78rem;
    }

    .archive-search input::placeholder {
      color: #aab7a5;
      opacity: 1;
    }

    .archive-search:focus-within {
      border-color: #f4cc59;
      outline: 2px solid #f4cc59;
      outline-offset: 2px;
    }

    .archive-search button {
      display: inline-flex;
      min-width: 3.1rem;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
      padding: 0.55rem 0.75rem;
      border: 0;
      border-left: 2px solid #f4cc59;
      border-radius: 0;
      background: #53693e;
      color: #fff1c2;
      font: inherit;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      transition: background-color 120ms steps(2, end), color 120ms steps(2, end);
    }

    .archive-search button:hover:not(:disabled) {
      background: #f4cc59;
      color: #101923;
    }

    .archive-search button:focus-visible {
      outline: 2px solid #fff1c2;
      outline-offset: -4px;
    }

    .archive-search button:disabled {
      background: #303b39;
      color: #aab5aa;
      cursor: not-allowed;
    }

    .search-icon {
      font-size: 1rem;
      line-height: 1;
    }

    @media (prefers-reduced-motion: reduce) {
      .archive-search button {
        transition: none;
      }
    }
  `,
  template: `
    <form class="archive-search" role="search" (submit)="$event.preventDefault(); search()">
      <label class="visually-hidden" for="archive-search-input">Search the archive</label>
      <input
        id="archive-search-input"
        type="search"
        name="query"
        autocomplete="off"
        enterkeyhint="search"
        placeholder="Search records..."
        [(ngModel)]="searchItem"
      >
      <button type="submit" [disabled]="!searchItem.trim()" aria-label="Search archive">
        <span class="search-icon" aria-hidden="true">⌕</span>
        <span>Search</span>
      </button>
    </form>
  `,
})
export class DesignSystem {
  private readonly service = inject(SearchStore)
  protected searchItem = '';

  search(): void {
    const query = this.searchItem.trim();
    if (query) {
      this.service.dispatch(query);
    }
  }
}
