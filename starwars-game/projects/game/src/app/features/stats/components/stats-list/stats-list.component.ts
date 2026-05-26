import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { GetAllStatsBusinessService } from '../../services/business/get-all-stats.business.service';
import { GetAllStatsInfraService } from '../../services/infra/get-all-stats.infra.service';
import { StatsListDummyComponent } from '../stats-list-dummy/stats-list-dummy.component';
import { Subscription } from 'rxjs';
import { Stats } from '../../models/stat';

@Component({
  selector: 'game-stats-list',
  imports: [StatsListDummyComponent],
  templateUrl: './stats-list.component.html',
  styleUrl: './stats-list.component.css',
  providers: [GetAllStatsBusinessService, GetAllStatsInfraService]
})
export class StatsListComponent implements OnInit, OnDestroy {
  private readonly business = inject(GetAllStatsBusinessService);
  private readonly subscription = new Subscription();
  //protected stats: Stats = [];
  protected stats = signal<Stats>([]);


  ngOnInit(): void {
    this.subscription.add(
      this.business.getAll().subscribe({
        next: stats => this.stats.set([...stats])
        //next: stats => this.stats.update(oldValues => [...oldValues, ...stats]) // Attention,; append infini
      })
    )
  }

   ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
