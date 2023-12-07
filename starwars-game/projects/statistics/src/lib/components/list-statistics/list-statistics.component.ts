import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsApplication } from '../../services/statistics.application';

@Component({
  selector: 'lib-list-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-statistics.component.html',
  styleUrls: ['./list-statistics.component.css']
})
export class ListStatisticsComponent {
  stats$ = inject(StatisticsApplication).getAll();
}
