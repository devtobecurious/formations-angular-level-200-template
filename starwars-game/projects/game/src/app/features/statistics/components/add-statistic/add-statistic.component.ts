import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Statistic } from '../../models';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'projects/game/src/app/reducers';
import { addNewStatAction } from '../../store/statistics.actions';

@Component({
  selector: 'game-add-statistic',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-statistic.component.html',
  styleUrl: './add-statistic.component.css'
})
export class AddStatisticComponent {
  private readonly store = inject(Store<ApplicationState>);
  item: Statistic = { annee: 0, mois: 0, nbGagnees: 0, nbPerdues: 0  };

  save(): void {
    this.store.dispatch(addNewStatAction({ item: this.item }));
  }
}
