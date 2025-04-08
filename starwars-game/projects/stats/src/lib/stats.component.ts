import { Component, computed, inject } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { StatsBusiness } from './services/stats.business';
import { BaseChartDirective } from 'ng2-charts';
import { StatsInfrastructure } from './services/stats.infrastructure';

@Component({
  selector: 'lib-stats',
  imports: [BaseChartDirective],
  template: `
  <div style="display: block;">
    <canvas baseChart width="400" height="400"
      [type]="'line'"
      [data]="lineChartData()"
      [options]="lineChartOptions"
      [legend]="lineChartLegend">
    </canvas>
</div>
  `,
  styles: ``,
  providers: [
    StatsInfrastructure,
    StatsBusiness
  ]
})
export class StatsComponent {
  private readonly business = inject(StatsBusiness)
  //private years = this.business.years
  private data = this.business.successesByYear

  lineChartData = computed<ChartConfiguration<'line'>['data'] | undefined>(() => {
    const years = this.business.years()
    const data = this.data()

    if(! years || ! data) {
      return
    }

    const line = {
      labels: years,
      datasets: [
        {
          data: data,
          label: 'Series A',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(81, 0, 255, 0.3)'
        },
      ]
    }

    return line
  })

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
}
