import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'game-discover-observables',
  templateUrl: './discover-observables.component.html',
  styleUrls: ['./discover-observables.component.css']
})
export class DiscoverObservablesComponent implements OnInit, OnDestroy {
  @Output() item = new EventEmitter();
  private subscription = new Subscription();
  counter$ : Observable<{ id: number, matricule: string}>;

  constructor() {
    let counterVal = 0;
    this.counter$ = new Observable<{ id: number, matricule: string}>(observer => {

      setInterval(() => {
        observer.next({
          id: counterVal,
          matricule: `${counterVal}-matricule`
        });
        counterVal ++;
      }, 1000);
    });
  }

  ngOnInit(): void {
    console.info('===> 1. START ====');
    // const getData = new Promise((resolve, reject) => {
    //   const rand = Math.random() * 100;
    //   console.info('promise - je suis appelée', rand);

    //   setTimeout(() => {
    //     const data = { id: 1, matricule: '5357' };
    //     resolve(data);
    //     resolve(data);=> pas deux fois
    //   }, 0);
    // }).then(item => console.info('===> promise, return', item));

    const getData$ = new Observable(observer => {
      const rand = Math.random() * 100;
      console.info('observable - je suis appelée', rand);

      observer.next('=> avant');

      observer.complete();

      observer.next('=> apres');

      setTimeout(() => {
        const data = { id: 1, matricule: '5357' };
        console.info('------> lambda', this);
        for (let index = 0; index < 30; index++) {
          observer.next(index);
        }
      }, 0);
      console.info('?????????????????????????????????');
    });
    this.subscription.add(
        getData$.subscribe(
        item => console.info('===> observable, return', item),
        null,
        () => console.info('FINNNNNNNNN')
      )
    );

    this.subscription.add(
      getData$.subscribe()
    );

    console.info('===> 100. END ====');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
