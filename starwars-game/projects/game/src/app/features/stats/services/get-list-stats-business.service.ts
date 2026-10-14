import { computed, inject, Injectable, Signal } from '@angular/core';
import { GetListStatsService } from './get-list-stats.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchBarService } from 'search-bar';
import { Statistics } from '../models/statistic';

@Injectable({
  providedIn: 'root'
})
export class GetListStatsBusinessService {
  private readonly service = inject(GetListStatsService);
  private readonly items = toSignal(this.service.getAll());
  private readonly searchService = inject(SearchBarService);
  private readonly itemsFiltered = computed(() => {
    const searchValue = this.searchService.stateAsReadonly();
    const items = this.items();

    console.info('searchValue', searchValue);

    if(items && searchValue && searchValue !== '') {
      return items.filter(item => item.year === +searchValue);
    }

    return items;
  })

  getList(): Signal<Statistics> {
    return this.itemsFiltered;
  }
}
