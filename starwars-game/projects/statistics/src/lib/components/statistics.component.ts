import { Component } from '@angular/core';
import { StatisticsInfrastructure } from '../services/statistics-infrastructure';

@Component({
  selector: 'lib-statistics',
  standalone: true,
  imports: [],
  template: `
    <p>
      statistics works!
    </p>
  `,
  styles: ``,
  providers: [
    // { provide: StatisticsInfrastructure, useFactory:  }
  ]
})
export class StatisticsComponent {

}
