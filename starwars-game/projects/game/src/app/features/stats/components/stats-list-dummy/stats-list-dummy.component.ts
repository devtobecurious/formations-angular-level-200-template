import { Component, inject } from '@angular/core';
import { GetAllStatsBusinessService } from '../../services/business/get-all-stats.business.service';

@Component({
  selector: 'game-stats-list-dummy',
  imports: [],
  templateUrl: './stats-list-dummy.component.html',
  styleUrl: './stats-list-dummy.component.css'
})
export class StatsListDummyComponent {
  private readonly business = inject(GetAllStatsBusinessService)
}
