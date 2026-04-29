import { Component, inject } from '@angular/core';
import { ProvideAllStatistics } from '../services/applicatif/provide-all-stats';
import { AsyncPipe } from '@angular/common';
import { DisplayDataLoadingComponent } from './uis/display-data-loading/display-data-loading.component';
import { FormsModule } from "@angular/forms";
import { GetAllStatsFromApi } from '../services/infrastructure/get-all-stats-from-api';
import { FilterStatsComponent } from './filter-stats/filter-stats.component';

@Component({
  selector: 'lib-statistics',
  imports: [AsyncPipe, DisplayDataLoadingComponent, FilterStatsComponent],
  providers: [ProvideAllStatistics, GetAllStatsFromApi],
  template: `
    <lib-filter-stats />
    <lib-display-data-loading></lib-display-data-loading>

    @let state = stats$ | async;
    @if(state) {
    <table>
      <tbody>
        @for(item of state.items; track item) {
          <tr >
            <td>{{item.successPercentage}}</td>
          </tr>
        }
        @empty {
          <tr>
            <td>No data available</td>
          </tr>
        }
      </tbody>
    </table>
      }
  `,
  styles: ``
})
export class StatisticsComponent {
  private readonly business = inject(ProvideAllStatistics);
  protected readonly stats$ = this.business.getAllWithPercentage();
}
