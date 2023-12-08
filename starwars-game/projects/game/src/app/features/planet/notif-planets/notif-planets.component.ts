import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationState } from '../../../reducers';
import { Store, select } from '@ngrx/store';
import { selectAllPlanetsLabasSelector, selectAllPlanetsSelector } from '../store/planet.selector';

@Component({
  selector: 'game-notif-planets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notif-planets.component.html',
  styleUrls: ['./notif-planets.component.css']
})
export class NotifPlanetsComponent {
  private readonly store = inject(Store<ApplicationState>);
  planets$ = this.store.pipe(select(selectAllPlanetsLabasSelector));


}
