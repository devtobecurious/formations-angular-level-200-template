import { Component, inject } from '@angular/core';
import { GetAllStatisticsBusiness } from '../../services/statistics.businesses';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-list-statistics',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list-statistics.component.html',
  styleUrl: './list-statistics.component.css'
})
export class ListStatisticsComponent {
  private readonly business = inject(GetAllStatisticsBusiness);
  stats$ = this.business.getAll('');
}
