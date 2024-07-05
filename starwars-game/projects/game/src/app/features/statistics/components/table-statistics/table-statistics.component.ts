import { Component, input } from '@angular/core';
import { Statistic } from '../../models';

@Component({
  selector: 'game-table-statistics',
  standalone: true,
  imports: [],
  templateUrl: './table-statistics.component.html',
  styleUrl: './table-statistics.component.css'
})
export class TableStatisticsComponent {
  items = input.required<Statistic[]>();
}
