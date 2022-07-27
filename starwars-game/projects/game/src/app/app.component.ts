import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, pairwise, takeUntil } from 'rxjs/operators';
import { EnemyDTO } from './core/models/enemy.dto';
import { PersonDTO } from './core/models/person.dto';
import { demandeRemplissageListEnemiesAction } from './features/enemy/store/actions/enemy.actions';
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

  loginForm : FormGroup;

  constructor(private service: ProfileService,
              private peopleService: PeopleService,
              private store: Store<ApplicationState>,
              private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3)] ],
      password: [''],
      service: ['']
    });

    //const toutesLesValeursSaisies = this.loginForm.value;
  }

  appel() {
    console.warn('APPEL');
  }

  ngOnInit() {
    this.loginForm.valueChanges.pipe(
      distinctUntilChanged(),
      pairwise()
    ).subscribe(item => console.info(item[0], item[1]));

    this.loginForm.valueChanges.pipe(
      debounceTime(200),

    ).subscribe();

    this.enemies$ = this.store.pipe(
      select(selectAllEnemies)
      //select(selectEnemiesALive)
    );

    this.loginForm.setValue({
      login: 'email@',
      password: '123',
      service: 'fgfgfgfg'
    });

    this.loginForm.patchValue({
      service: 'fgfgfgfg'
    });

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
    this.store.dispatch(demandeRemplissageListEnemiesAction());
  }
}
