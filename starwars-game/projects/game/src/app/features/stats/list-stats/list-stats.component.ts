import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { StatisticMetierService } from '../services/statistic-metier.service';

@Component({
  selector: 'game-list-stats',
  templateUrl: './list-stats.component.html',
  styleUrls: ['./list-stats.component.css']
})
export class ListStatsComponent implements OnInit, OnChanges, OnDestroy {
  items: any[] = [];
  private subs: Subscription[] = [];

  constructor(private service: StatisticMetierService) {
    // console.info('service', this.service);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.info('ngOnChanges');
  }

  ngOnInit(): void {
    // console.info('00. ngOnInit');

    const callBackEachNext = (items: any[]) => {
      this.items = items;
    }

    const subscription = this.service.getAll().subscribe(callBackEachNext);
    this.subs.push(subscription);

    // console.info('01. ngOnInit');
  }

  ngOnDestroy(): void {
    // console.info('onDestroy ????');
    this.subs.forEach(item => item.unsubscribe());
  }
}
