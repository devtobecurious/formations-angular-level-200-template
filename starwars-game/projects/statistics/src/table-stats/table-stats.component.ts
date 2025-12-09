import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import StatItem from '../lib/models/stat-item';

@Component({
  selector: 'lib-table-stats',
  imports: [],
  templateUrl: './table-stats.component.html',
  styleUrl: './table-stats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableStatsComponent {
  statsList = input.required<StatItem[] | undefined | null>()
}
