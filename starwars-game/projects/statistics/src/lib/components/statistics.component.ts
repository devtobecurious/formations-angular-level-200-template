import { Component, inject, signal, Signal } from '@angular/core';
import { Statistic, Statistics } from '../models';
import { StatisticsBusiness } from '../statistics.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-statistics',
  standalone: true,
  imports: [],
  template: `
      <table>
        <tbody>
          @for (item of list(); track item.key) {
            <tr>
              <td>
                {{ item.year}}
              </td>
              <td>
                {{ item.nbSuccess}}
              </td>
            </tr>
          }
        </tbody>
      </table>
  `,
  styles: ``
})
export class StatisticsComponent {
  private readonly business = inject(StatisticsBusiness);
  list = toSignal(this.business.getAll());
}
