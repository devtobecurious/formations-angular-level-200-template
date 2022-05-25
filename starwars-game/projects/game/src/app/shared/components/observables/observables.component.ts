import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'game-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private subss: Subscription[] = [];
  private flagToDestroy$ = new Subject<boolean>();

  constructor() { }

  ngOnDestroy(): void {
    console.info('Destroy');
    this.subscription.unsubscribe();

    this.flagToDestroy$.next(true);
    this.flagToDestroy$.unsubscribe();
    // this.subss.forEach(item => item.unsubscribe());
    // this.subscription = null;
  }

  ngOnInit(): void {
    console.info('===== START ======');

    // setTimeout(() => {
    //   console.info('Quand ?');
    // }, 0);

    const promise = new Promise((resolve, reject) => {
      console.info('01 -- promise');

      setTimeout(() => {
        resolve('1. OK');
      }, 1000);

      // resolve('OK 2');
    }).then(value => console.info('promise :: ' + value));

    promise.then(value => console.info('promise2 :: ' + value));

    const obs$ = new Observable(subscriber => {
      console.info('01 -- observable');

      setInterval(() => {
        subscriber.next('1. OK');
      }, 1000);

      // setTimeout(() => {
      //   subscriber.next('2. OK');
      // }, 1000);

      // subscriber.error('KO');

      // subscriber.complete();

      // subscriber.next('OK2');
      // subscriber.next('OK3');


      // console.info('010 -- observable');
    });

    obs$
    .pipe(
      takeUntil(this.flagToDestroy$)
    )
    .subscribe();

    this.subscription.add( obs$.subscribe() );

    const callback = (value: any) => console.info('observable :: ' + value);
    this.subscription.add( obs$.subscribe(callback,
                           err => console.error(err),
                          () => console.info('observable :: complete'))
                         );

    console.info('===== END ======');
  }

}
