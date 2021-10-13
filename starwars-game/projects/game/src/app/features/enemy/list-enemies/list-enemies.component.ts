import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EnemyDto } from '../../../core/models/enemy';
import { ApplicationState } from '../../../reducers';
import { EnemyService } from '../services/enemy.service';
import { addRandomEnemyAction } from '../store/actions/enemies.actions';
import { selectAllEnemies } from '../store/selectors/enemies.selector';

@Component({
  selector: 'game-list-enemies',
  templateUrl: './list-enemies.component.html',
  styleUrls: ['./list-enemies.component.css']
})
export class ListEnemiesComponent implements OnInit {
  // enemies !: string[];
  // enemies !: { id: number, name: string}[];
  enemies !: EnemyDto[];

  constructor(private service: EnemyService, private store: Store<ApplicationState>) {
    // this.enemies = [];
  }

  ngOnInit(): void {
    this.store
    .pipe(
      select(selectAllEnemies)
    )
    .subscribe(items => this.enemies = items);

    this.service.getAll().subscribe(items => this.enemies = items);
  }

  addNewOne() {
    this.store.dispatch(addRandomEnemyAction());
  }
}
