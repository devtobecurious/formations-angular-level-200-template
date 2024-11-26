import { Component, inject } from '@angular/core';
import { StatisticsInfrastructure } from './statistics.infrastructure';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-statistics',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @let stats = stats$ | async;

    <table>
        <tbody>
    @for (item of stats; track item) {
        <tr>
          <td>
            {{item.month}}
          </td>
        </tr>
    }
    <tbody>
      </table>
  `,
  styles: ``
})
export class StatisticsComponent {
  // private readonly infra = inject(StatisticsInfrastructure)
  // stats$ = this.infra.getAll()
  // private readonly infra =
  stats$ = (inject(StatisticsInfrastructure)).getAll()
}
