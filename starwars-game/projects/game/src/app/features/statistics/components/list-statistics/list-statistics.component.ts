import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsBusiness } from '../../services/statistics.business';

@Component({
  selector: 'game-list-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-statistics.component.html',
  styleUrl: './list-statistics.component.css'
})
export class ListStatisticsComponent {
  stats$ = inject(StatisticsBusiness).getAll();

  ngOnInit(): void {
    this.stats$.subscribe();
  }
}
