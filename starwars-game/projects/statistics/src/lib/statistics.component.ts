import { Component, inject } from '@angular/core';
import { GetAllStats, StatisticsService } from './statistics.service';
import { StatisticsBusiness } from './statistics.business';
import { AsyncPipe } from '@angular/common';
import { TableStatsComponent } from '../table-stats/table-stats.component';

const rawService: GetAllStats = {
  getAll: () => {
    throw new Error('Function not implemented.');
  }
}

@Component({
  selector: 'lib-statistics',
  imports: [AsyncPipe, TableStatsComponent],
  template: `
  @let stats = stats$ | async;

  <lib-table-stats [statsList]="stats" />

  `,
  styles: ``,
  providers: [{ provide: StatisticsService, useValue: rawService }]
  //providers: [StatisticsService]
})
export class StatisticsComponent {
  private readonly business = inject(StatisticsBusiness);
  protected stats$ = this.business.getAll();
}
