import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Statistics } from '../../models';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/reducers';
import { demandePourRecupererLesStatsDepuisApiAction, mettreAJourStateDepuisRetourApi } from '../../store/actions';
import { recupererStatsAnneeEnCours } from '../../store/selectors';

@Component({
  selector: 'app-list-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-statistics.component.html',
  styleUrls: ['./list-statistics.component.css']
})
export class ListStatisticsComponent {
  private store = inject(Store<ApplicationState>);
  // stats: Statistics = [];
  stats$ = this.store.pipe(select(recupererStatsAnneeEnCours));

  dispachData(): void {
   // this.store.dispatch(demandePourRecupererLesStatsDepuisApiAction());
    this.store.dispatch(mettreAJourStateDepuisRetourApi({ statistics: [{ annee: 2023, mois: 11, nbPartiesGagnees: 1, nbPartiesPerdues: 2 }] }));
  }
}
