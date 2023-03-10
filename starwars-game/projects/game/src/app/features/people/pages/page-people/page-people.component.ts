import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from '../../list-people/list-people.component';
import { PeopleBusiness } from '../../services/people.business';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { People } from '../../models';

@Component({
  selector: 'game-page-people',
  standalone: true,
  imports: [
    CommonModule,
    ListPeopleComponent
  ],
  templateUrl: './page-people.component.html',
  styleUrls: ['./page-people.component.css']
})
export class PagePeopleComponent implements OnInit, OnDestroy {
  //private subscription = new Subscription(); Technique 01
  private subject = new Subject<boolean>();
  people !: People; // Techniques 01 ou 02

  people$ : Observable<People>; // Technique 03

  constructor(private readonly business: PeopleBusiness) {
    this.people$ = this.business.getAll();
  }

  ngOnInit(): void {
    // Technique 01
    //this.subscription.add( this.business.getAll().subscribe() );

    // Technique 02
    // this.business.getAll()
    // .pipe(
    //   takeUntil(this.subject)
    // )
    // .subscribe(items => this.people = items);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    this.subject.next(true);
    this.subject.unsubscribe();
  }
}
