import { Component, inject, OnInit } from '@angular/core';
import { GetListStatsService } from '../../services/get-list-stats.service';
import { AsyncPipe } from '@angular/common';
import { StatisticList } from '../../models/statistic';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Logger } from 'tools';

@Component({
  selector: 'lib-list-stats',
  imports: [AsyncPipe],
  templateUrl: './list-stats.component.html',
  styleUrl: './list-stats.component.css',
//  providers: [GetListStatsService]
})
export class ListStatsComponent implements OnInit {
  private readonly logger = inject(Logger)
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
        this.logger.log({message: 'Items fetched', level: 'info', timestamp: new Date()})
      }
    })
  }
}
