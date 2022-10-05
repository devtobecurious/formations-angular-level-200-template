import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { StatsBusinessService } from '../service/stats-business.service';
import { requestToDeleteOneStateCommand, requestToLoadAllStatsInfoCommand } from '../store/actions';
import { selectAllStatistics } from '../store/selectors';

@Component({
  selector: 'game-list-stats',
  templateUrl: './list-stats.component.html',
  styleUrls: ['./list-stats.component.css']
})
export class ListStatsComponent implements OnInit {
  items: any[] = [];

  // constructor(private service: StatsBusinessService) { }
  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit(): void {
    // uniquement pour récupérer les données venant du store
    this.store.pipe(
      select(selectAllStatistics),
    ).subscribe(items => this.items = items);

    // this.service.getAll().subscribe(items => this.items = items);
  }

  load(): void {
    // pour demander à rmeplir l'état qui était à priori vide au démarragde
    this.store.dispatch(requestToLoadAllStatsInfoCommand());
  }

  deleteOneStat(): void {
    this.store.dispatch(requestToDeleteOneStateCommand());
  }
}
