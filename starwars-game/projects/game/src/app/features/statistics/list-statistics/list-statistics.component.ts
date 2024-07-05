import { Component, inject, input } from '@angular/core';
import { TableStatisticsComponent } from '../components/table-statistics/table-statistics.component';
import { Statistic } from '../models';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { StatisticsBusiness } from '../services/statistics.business';

@Component({
  selector: 'game-list-statistics',
  standalone: true,
  imports: [TableStatisticsComponent, AsyncPipe],
  templateUrl: './list-statistics.component.html',
  styleUrl: './list-statistics.component.css'
})
export class ListStatisticsComponent {
  private readonly business = inject(StatisticsBusiness);
  data$ = this.business.getAll();

  initData(): void {
    this.business.init();
  }
}
