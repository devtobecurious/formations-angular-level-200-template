import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, Subscription } from 'rxjs';
import { concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'game-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, AfterViewInit, OnDestroy {
  click$ !: Observable<any>;
  observable$ !: Observable<any>;
  item: any;
  private toDestroy = new Subscription();

  @ViewChild('clickButton') clickButton !:ElementRef;

  constructor() { }


  ngOnInit(): void {
    // console.info('0. DEBUT');

    // const prom = fetch('https://swapi.dev/api/people');

    // const promise = new Promise((resolve, reject) => {
      //   console.info('1. Promise');

      //   resolve('tot');
      //   resolve('o');
      // });//.then(item => console.info('promise', item));

      // // promise.then(item => console.info('promise 1', item));
      // // promise.then(item => console.info('promise 2', item));


      this.observable$ = new Observable(subscriber => {

          console.info('2. Observable');

          subscriber.next('tot');

          setTimeout(() => {
              console.info('3. setTimeout');
              subscriber.next('==> o');
            }, 1500);

            // subscriber.complete();

            for (let index = 0; index < 10; index++) {
                console.info('3. for', index);
                subscriber.next(`tot-${index}`);
              }
            });

            const subscriberNext = (item: any) => this.item = item;

            //this.observable$.subscribe();//(item => console.info('observable', item));
            const sub = this.observable$
            .pipe(
                tap(item => console.info('tap 0', item)),
                map(item => `${item}-map o//`),
                tap(item => console.info('tap 1', item)),
              )
              .subscribe(
                  subscriberNext,
                  err => console.error('err', err),
                  () => console.info('complete')
                );

                this.toDestroy.add(sub);

                console.info('10. FIN');
  }

  ngAfterViewInit(): void {
    //const obs$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    this.click$ = fromEvent(this.clickButton.nativeElement, 'click');

    // this.click$
    // .pipe(
    //   mergeMap(() => interval(500))
    // )
    // .subscribe(item => console.info('oh yes click me !', item));

// this.click$
    // .subscribe(() => {
    //   interval(500)
    //   .subscribe(item => console.info('item', item))
    // });

    // this.click$
    // .pipe(
    //   tap(() => console.info('click')),
    //   concatMap(() => interval(500))
    // )
    // .subscribe(item => console.info('oh yes click me !', item));

    this.click$
    .pipe(
      tap(() => console.info('click')),
      switchMap(() => interval(500))
    )
    .subscribe(item => console.info('oh yes click me !', item));



    //interval(1500).subscribe(item => console.info('interval', item));
  }

  ngOnDestroy(): void {
    this.toDestroy.unsubscribe();
  }

}
