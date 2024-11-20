import { Component, inject } from '@angular/core';
import { StatisticsBusiness } from '../services/statistics.business';
import { AsyncPipe, NgFor } from '@angular/common';
import { LogersService } from 'logers';

@Component({
  selector: 'lib-statistics',
  standalone: true,
  imports: [AsyncPipe],
  providers: [
  ],
  template: `
    @let stats = stats$ | async;

    @for (item of stats; track item) {
      <div>
        {{ item.year }} => {{ item.nbSuccess}}
      </div>
    }

    @if(stats) {
      <i>Nb de stats : {{stats.length}}</i>
    }

    <!-- <div *ngFor="let item of stats$ | async">
        {{ item.year }} => {{ item.nbSuccess}}
      </div> -->
  `,
  styles: ``
})
export class StatisticsComponent {
  // private readonly business = inject(StatisticsBusiness)
  // stats$ = this.business.getAll()
  //private readonly business = inject(StatisticsBusiness)
  private readonly logger = inject(LogersService)
  stats$ = inject(StatisticsBusiness).getAll()

  ngOnInit(): void {
    this.logger.log('info', 'StatisticsComponent:Init')
  }
}
