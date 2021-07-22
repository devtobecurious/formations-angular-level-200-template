import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnemyDTO } from './core/models/enemy.dto';
import { PersonDTO } from './core/models/person.dto';
import { miseAJourListEnemiesAction } from './features/enemy/store/actions/enemy.actions';
import { selectAllEnemies, selectEnemiesALive } from './features/enemy/store/selectors/enemy.selectors';
import { PeopleService } from './features/people/services/people.service';
import { ProfileService } from './features/player/services/profile.service';
import { ApplicationState } from './reducers';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'game';
  people$ = new Observable<PersonDTO[]>();
  items: PersonDTO[] = [];
  endOfObservable$ = new Subject<boolean>();

  enemies$ = new Observable<EnemyDTO[]>();

  constructor(private service: ProfileService,
              private peopleService: PeopleService,
              private store: Store<ApplicationState>) {
  }

  ngOnInit() {
    this.enemies$ = this.store.pipe(
      select(selectAllEnemies)
      //select(selectEnemiesALive)
    );


    //this.people$ = this.peopleService.getAll();

    this.peopleService.getAll()
    .pipe(takeUntil(this.endOfObservable$))
    .subscribe(items => this.items = items);

    this.people$ = this.peopleService.getAll()
    .pipe(takeUntil(this.endOfObservable$));
  }

  ngOnDestroy() {
    this.endOfObservable$.next(true);
    this.endOfObservable$.unsubscribe();
  }

  addNewFakeEnemy() {
    this.store.dispatch(miseAJourListEnemiesAction());
  }
}
