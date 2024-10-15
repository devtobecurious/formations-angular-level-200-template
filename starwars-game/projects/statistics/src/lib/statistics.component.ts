import { Component, inject, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Statistics } from './models';
import { StatisticsBusiness } from './statistics.business';
import { LogsService } from 'logs';

@Component({
  selector: 'lib-statistics',
  standalone: true,
  imports: [],
  template: `
    <table>
      @for (item of statistics; track $index) {
        <tr>
          <td>
            {{ item.month }}
          </td>
        </tr>
      }
    </table>
  `,
  styles: ``
})
export class StatisticsComponent implements OnInit { // Thin component
//   private readonly logger = inject(LogsService)
  statistics$ = (inject(StatisticsBusiness)).getAll() // Lazy
  statistics: Statistics = [];

  ngOnInit(): void {
    this.statistics$.subscribe(items => this.statistics = items)
    // this.logger.log('ngOnInit stats')

  }
}
