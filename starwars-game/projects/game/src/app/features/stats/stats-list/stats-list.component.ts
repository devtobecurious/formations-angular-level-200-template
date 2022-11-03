import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ApplicationState } from '../../../reducers';
import { add2statisticInArrayAction } from '../store/actions';
import { selectAllStatistics } from '../store/selectors';

@Component({
  selector: 'game-stats-list',
  templateUrl: './stats-list.component.html',
  styleUrls: ['./stats-list.component.css']
})
export class StatsListComponent {

  constructor(private readonly store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.store.pipe(
      // tap(item => console.info(item)),
      select(selectAllStatistics)
    ).subscribe(items => console.info(items));
  }

  addRows(nb: number): void {
    this.store.dispatch(add2statisticInArrayAction({ value: nb }));
  }

}
