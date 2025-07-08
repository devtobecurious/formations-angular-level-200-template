import { Component, inject, OnInit } from '@angular/core';
import { GetListStatsService } from '../../services/get-list-stats.service';
import { AsyncPipe } from '@angular/common';
import { StatisticList } from '../../models/statistic';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-list-stats',
  imports: [AsyncPipe],
  templateUrl: './list-stats.component.html',
  styleUrl: './list-stats.component.css',
//  providers: [GetListStatsService]
})
export class ListStatsComponent implements OnInit {
  private readonly getListStatsService = inject(GetListStatsService)
  private readonly items$ = this.getListStatsService.getAll()
  protected items: StatisticList | undefined

  ngOnInit(): void {
    this.items$
    .pipe(
      takeUntilDestroyed()
    )
    .subscribe({
      next: itemsFromService => {
        this.items = itemsFromService
      }
    })
  }
}
