import { Component, inject } from '@angular/core';
import { GetListStatsService } from '../../services/get-list-stats.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-list-stats',
  imports: [AsyncPipe],
  templateUrl: './list-stats.component.html',
  styleUrl: './list-stats.component.css',
//  providers: [GetListStatsService]
})
export class ListStatsComponent {
  private readonly getListStatsService = inject(GetListStatsService)
  items$ = this.getListStatsService.getAll()
}
