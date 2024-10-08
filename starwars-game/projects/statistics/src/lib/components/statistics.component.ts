import { Component, computed, inject } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop'
import { StatisticsBusiness } from '../services/statistics-business';

@Component({
  selector: 'lib-statistics',
  standalone: true,
  imports: [],
  template: `
    <p>
       @for (stat of statOfTheYear$$(); track $index) {
        <div>{{ stat.nbSuccess }}</div>
       }
    </p>
  `,
  styles: ``,
  providers: [
    // { provide: StatisticsInfrastructure, useFactory:  }
  ]
})
export class StatisticsComponent {
  private readonly business = inject(StatisticsBusiness)
  //stats$$ = toSignal(this.business.getAll())
  //statOfTheYear$$ = computed(() => this.stats$$()?.filter(item => item.year === (new Date()).getFullYear()))
  statOfTheYear$$ = this.business.statsOfTheYear
}
