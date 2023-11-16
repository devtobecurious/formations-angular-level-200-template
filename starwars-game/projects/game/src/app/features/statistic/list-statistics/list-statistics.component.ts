import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StatsApp } from '../services/stats.app';
import { TableStatisticsComponent } from '../table-statistics/table-statistics.component';

@Component({
  selector: 'game-list-statistics',
  standalone: true,
  imports: [CommonModule, TableStatisticsComponent],
  templateUrl: './list-statistics.component.html',
  styleUrl: './list-statistics.component.css',
})
export class ListStatisticsComponent {
  stats$ = inject(StatsApp).getAll();
}
