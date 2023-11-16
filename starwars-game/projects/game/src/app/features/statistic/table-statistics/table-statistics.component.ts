import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stats } from '../models';

@Component({
  selector: 'game-table-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-statistics.component.html',
  styleUrl: './table-statistics.component.css'
})
export class TableStatisticsComponent {
  @Input() items !: Stats;
}
