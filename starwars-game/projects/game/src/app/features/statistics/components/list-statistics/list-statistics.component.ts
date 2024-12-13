import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'projects/game/src/app/reducers';
import { isLoadingStatistics, selectAllStatistics } from '../../store/statistics.selectors';
import { AsyncPipe } from '@angular/common';
import { Statistics } from '../../models';
import { addStatsAction, requestStatsToApiAction } from '../../store/statistics.actions';

@Component({
  selector: 'game-list-statistics',
  imports: [AsyncPipe],
  templateUrl: './list-statistics.component.html',
  styleUrl: './list-statistics.component.css'
})
export class ListStatisticsComponent {
  private readonly store = inject(Store<ApplicationState>)
  stats$ = this.store.select(selectAllStatistics)
  isLoading$ = this.store.select(isLoadingStatistics)

  fake(): void {
    const fakeData: Statistics = [
      { year: 2024, month: 11, nbSuccess: 1, nbFailed: 10 },
      { year: 2024, month: 10, nbSuccess: 5, nbFailed: 5 },
    ]
    this.store.dispatch(addStatsAction({ items: fakeData }))
  }

  init(): void {
    this.store.dispatch(requestStatsToApiAction())
  }
}
