import { HttpClient, httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { StarShip } from '../../models/startship';
import { shareReplay } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import {DesignSystem, SearchStore} from 'design-system';

@Component({
  imports: [DesignSystem],
  selector: 'app-all-starships.page',
  styleUrl: './all-starships.page.css',
  templateUrl: './all-starships.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllStarshipsPage {
  private readonly url = 'https://swapi.info/api/starships';
  private readonly http = inject(HttpClient);
  private readonly searchStore = inject(SearchStore);
  private readonly getFilteredItems$ = (filter: string) => this.http.get<StarShip[]>(this.url + '?name=' + filter).pipe(
    //shareReplay(1)
  )

  protected readonly filtersInMemoryItems = computed(() => {
    const items = this.shipResource.value();
    const filter = this.searchStore.asReadonly();

    if(items && filter && filter !== '') {
      return items.filter(item => item.name.startsWith(filter));
    }

    return items;
  })


  // private readonly eff = effect(() => {
  //   console.info('this.searchStore.asReadonly()', this.searchStore.asReadonly())
  // })

  // protected readonly shipResource = rxResource({
  //   defaultValue: [],
  //   params: () => this.searchStore.asReadonly(),
  //   stream: (ctx) => this.getFilteredItems$(ctx.params)
  // })

  protected readonly shipResource = httpResource<StarShip[]>(() => `${this.url}?name=${this.searchStore.asReadonly()}`, { defaultValue: []});
}
