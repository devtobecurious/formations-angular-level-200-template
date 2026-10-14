import { Component, inject, isDevMode, OnInit } from '@angular/core';
import { GetListStatsBusinessService } from '../../services/get-list-stats-business.service';
import { fakeDataService, GetListStatsService } from '../../services/get-list-stats.service';

@Component({
  selector: 'game-display-stats',
  imports: [],
  templateUrl: './display-stats.component.html',
  styleUrl: './display-stats.component.css',
  providers: [
    { provide: GetListStatsService, useFactory: () => isDevMode() ? fakeDataService : new GetListStatsService()  },
     GetListStatsBusinessService
  ]
})
export class DisplayStatsComponent implements OnInit {
  private readonly service = inject(GetListStatsBusinessService);
  protected readonly items = this.service.getList();

  ngOnInit(): void {
  }
}
