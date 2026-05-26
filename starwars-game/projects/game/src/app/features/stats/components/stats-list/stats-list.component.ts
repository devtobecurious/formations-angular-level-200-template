import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { GetAllStatsBusinessService } from '../../services/business/get-all-stats.business.service';
import { GetAllStatsInfraService } from '../../services/infra/get-all-stats.infra.service';
import { StatsListDummyComponent } from '../stats-list-dummy/stats-list-dummy.component';
import { Subscription } from 'rxjs';
import { Stats } from '../../models/stat';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { EnumToTxtPipe } from '../../../../shared/pipes/enum-to-txt.pipe';

@Component({
  selector: 'game-stats-list',
  imports: [StatsListDummyComponent, AsyncPipe, CurrencyPipe, EnumToTxtPipe],
  templateUrl: './stats-list.component.html',
  styleUrl: './stats-list.component.css',
  providers: [GetAllStatsBusinessService, GetAllStatsInfraService],
})
export class StatsListComponent implements OnInit, OnDestroy {
  private readonly business = inject(GetAllStatsBusinessService);
  protected readonly stats$ = this.business.getAll();
  protected readonly statsAsSignal = toSignal(this.stats$);

  protected readonly statsOfYear = computed(() => {
    const items = this.statsAsSignal();
    return items?.filter(item => item.year === new Date().getFullYear());
  })
  //private readonly subscription = new Subscription();
  //protected stats: Stats = [];
  // private readonly stats$ = this.business.getAll().pipe(
  //   takeUntilDestroyed()
  // );

  // private readonly stats$ = this.business.getAll().pipe(
  //   takeUntilDestroyed()
  // );

  //protected stats = signal<Stats>([]);

  ngOnInit(): void {
    // this.stats$.subscribe({
    //   next: (stats) => this.stats.set([...stats]),
    //   //next: stats => this.stats.update(oldValues => [...oldValues, ...stats]) // Attention,; append infini
    // });

    //this.subscription.add(
    // this.business.getAll().subscribe({
    //   next: stats => this.stats.set([...stats])
    //   //next: stats => this.stats.update(oldValues => [...oldValues, ...stats]) // Attention,; append infini
    // })
    //)
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
