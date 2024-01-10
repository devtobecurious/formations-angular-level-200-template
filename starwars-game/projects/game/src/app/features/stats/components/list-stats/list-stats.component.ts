import { Component, inject } from '@angular/core';
import { StatsBusiness } from '../../services/stats.business';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'game-list-stats',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list-stats.component.html',
  styleUrl: './list-stats.component.css'
})
export class ListStatsComponent {
  private readonly business = inject(StatsBusiness);
  stats$ = this.business.getAll();
}
