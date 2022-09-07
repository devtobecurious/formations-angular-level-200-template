import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, Subject, Subscription } from 'rxjs';
import { concatMap, mergeMap, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'game-game-observable-maps',
  templateUrl: './game-observable-maps.component.html',
  styleUrls: ['./game-observable-maps.component.css']
})
export class GameObservableMapsComponent implements OnInit, OnDestroy {
  private subscriptionParente = new Subscription();
  private subject = new Subject<boolean>();

  constructor() { }

  ngOnDestroy(): void {
        // this.subscriptionParente.unsubscribe();
    this.subject.next(true);
    this.subject.unsubscribe();

  }

  ngOnInit(): void {
  }

  @ViewChild('clickButton', { static: false }) button !: ElementRef;
  clicks$ !: Observable<any>;

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');

    // this.clicks$.subscribe(item => {
    //   interval(1000).subscribe(tick => console.info(tick));
    // });

    const obs$ = this.clicks$.pipe(
      takeUntil(this.subject),
      mergeMap(item => interval(1000))
    );
    const subscription = obs$.subscribe(item => console.info('click --->', item));
    this.subscriptionParente.add(subscription);

    // this.clicks$.pipe(
    //   tap(item => console.info('click', item)),
    //   concatMap(item => interval(1000))
    // ).subscribe(item => console.info('click --->', item));

    this.clicks$.pipe(
      // tap(item => console.info('click', item)),
      switchMap(item => interval(1000))
    ).subscribe(item => console.info('click --->', item));
  }

}
