import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PersonDTO } from './core/models/person.dto';
import { PeopleService } from './features/people/services/people.service';
import { ProfileService } from './features/player/services/profile.service';

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

  constructor(private service: ProfileService, private peopleService: PeopleService) {
  }

  ngOnInit() {
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
}
