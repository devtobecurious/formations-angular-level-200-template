import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ApplicationState } from '../../../reducers';
import { Statistic, StatsService } from '../service/stats.service';
import { prechargementStatsDeTestsAction } from '../store/actions';
import { selectAllStatistics, selectStatisticsFrom2007 } from '../store/selectors';

@Component({
  selector: 'game-list-statistic',
  templateUrl: './list-statistic.component.html',
  styleUrls: ['./list-statistic.component.css']
})
export class ListStatisticComponent implements OnInit {
  // items = ['', '']; Etape 1
  // items : string[] | undefined;
  items: Statistic[] = [];

  constructor(private readonly service: StatsService,
              private readonly store: Store<ApplicationState>) {
  }

  ngOnInit(): void {
    this.store.pipe(
      tap(state => console.info(state)),
      select(selectStatisticsFrom2007)
    ).subscribe(items => this.items = items);
    // console.info('ListStatisticComponent');
    // if(typeof(this.items) !== 'undefined') {

    // }
    // this.service.getAll().subscribe(items =>
    //   this.items = items
    //   //this.monautreService.getAll().subscribe();
    // );
  }

  clickToPreload(): void {
    this.store.dispatch(prechargementStatsDeTestsAction({ nbItems: 10 }));
  }

}
