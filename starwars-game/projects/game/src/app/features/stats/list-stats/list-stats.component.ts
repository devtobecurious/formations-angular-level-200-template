import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ApplicationState } from '../../../reducers';
import { Stat } from '../models';
import { StatisticMetierService } from '../services/statistic-metier.service';
import { requestToLoadToApi } from '../store/actions';
import { selectAllStats } from '../store/selectors';

@Component({
  selector: 'game-list-stats',
  templateUrl: './list-stats.component.html',
  styleUrls: ['./list-stats.component.css']
})
export class ListStatsComponent implements OnInit, OnChanges, OnDestroy {
  items: any[] = [];
  private subs: Subscription[] = [];
  public stats$ !: Observable<Stat[]>;

  // constructor(private service: StatisticMetierService) {
    // console.info('service', this.service);
//  }

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.info('ngOnChanges');
  }

  ngOnInit(): void {
    this.store.dispatch( requestToLoadToApi() );
    this.stats$ = this.store.pipe(select( selectAllStats ));

    // console.info('00. ngOnInit');

    // const callBackEachNext = (items: any[]) => {
    //   this.items = items;
    // }

    // const subscription = this.service.getAll().subscribe(callBackEachNext);
    // this.subs.push(subscription);

    // console.info('01. ngOnInit');
  }

  ngOnDestroy(): void {
    // console.info('onDestroy ????');
    this.subs.forEach(item => item.unsubscribe());
  }
}
