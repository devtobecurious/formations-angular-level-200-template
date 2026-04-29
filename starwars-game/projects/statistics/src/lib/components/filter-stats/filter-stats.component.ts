import { Component, inject } from '@angular/core';
import { ProvideAllStatistics } from '../../services/applicatif/provide-all-stats';

@Component({
  selector: 'lib-filter-stats',
  imports: [],
  templateUrl: './filter-stats.component.html',
  styleUrl: './filter-stats.component.css'
})
export class FilterStatsComponent {
  private readonly business = inject(ProvideAllStatistics);
}
