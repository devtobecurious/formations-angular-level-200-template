import { Component, destroyPlatform, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { People } from '../../../core/models/people';
import { User } from '../../../core/models/user';
import { PeopleService } from '../services/people.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'game-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnDestroy {
  user !: User;
  items: People[] = [];
  private subscription$ = new Subscription();
  private toDestroy$ = new Subject();
  public peoples$ !: Observable<People[]>;

// @Output()retour = new EventEmitter();

  constructor(private service: UserService, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peoples$ = this.peopleService.getAll();

    // 2° bonne pratique si bcp de services le composant
    // const sub$ = this.peopleService.getAll()
    //                                .pipe(
    //                                   takeUntil(this.toDestroy$)
    //                                )
    //                                .subscribe(items => this.items = items);


    // 1° bonne pratique
    // const sub$ = this.peopleService.getAll()
    //                                .subscribe(
    //                                   items => this.items = items
    //                                 );
    // this.subscription$.add(sub$);
  }

  save() {
    this.service.save(this.user);
  }

  ngOnDestroy(): void {
    // 2° approche
    // this.toDestroy$.next(true);
    // this.toDestroy$.unsubscribe();

    // 1° approche
    // this.subscription$.unsubscribe();
  }
}
