import { Component, inject, OnInit } from '@angular/core';
import { GetListService } from './services/get-list.service';

@Component({
  selector: 'lib-statistics',
  imports: [],
  template: `
    @let stats = list();
    @let successes = statsWithSuccess();

    @for (item of stats; track item) {
      <div>
      {{ item.year }}-{{ item.month }}: {{ item.nbSuccess }}/{{ item.nbFailed }}
    </div>
    }
    @empty {
      <p>No data available</p>
    }

    <h1>Mes succès</h1>
    @for (item of successes; track item) {
      <div>
        {{ item.year }}-{{ item.month }}: {{ item.nbSuccess }}/{{ item.nbFailed }}
      </div>
    }
  `,
  styles: ``
})
export class Statistics implements OnInit {
  private readonly service = inject(GetListService)
  protected list = this.service.store
  protected statsWithSuccess = this.service.statsWithSuccess

  ngOnInit(): void {
    this.service.addAll({ year: 2023, month: 1, nbSuccess: 10, nbFailed: 5 }, { year: 2023, month: 2, nbSuccess: 8, nbFailed: 7 })
  }
}
