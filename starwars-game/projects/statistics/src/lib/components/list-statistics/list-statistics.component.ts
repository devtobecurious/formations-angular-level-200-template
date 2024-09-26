import { Component, inject, OnInit } from '@angular/core';
import { GetAllStatisticsBusiness } from '../../services/statistics.businesses';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-list-statistics',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list-statistics.component.html',
  styleUrl: './list-statistics.component.css'
})
export class ListStatisticsComponent implements OnInit {
  // private readonly business = inject(GetAllStatisticsBusiness);
  // stats$ = this.business.getAll('');
  stats$ = inject(GetAllStatisticsBusiness).getAll('');

  ngOnInit(): void {
    this.stats$.subscribe(); // Un appel à l'api
    this.stats$.subscribe(); // Un appel à l'api
  }
}
