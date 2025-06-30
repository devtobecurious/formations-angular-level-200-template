import { Component, inject } from '@angular/core';
import { StatisticsStore } from '../public-api';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-statistics',
  imports: [AsyncPipe],
  template: `
    @let state = items$ | async;

    @if(state) {
      @for (item of state.items; track $index) {
        <div>{{item.year}}</div>
      }
    }
  `,
  styles: ``
})
export class StatisticsComponent {
  private readonly store = inject(StatisticsStore)
  items$ = this.store.asObservable
}
