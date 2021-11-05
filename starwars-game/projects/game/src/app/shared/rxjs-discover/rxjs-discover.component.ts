import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'game-rxjs-discover',
  templateUrl: './rxjs-discover.component.html',
  styleUrls: ['./rxjs-discover.component.css']
})
export class RxjsDiscoverComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    // PROMISES ____
    const callApi = new Promise((resolve, reject) => {
      console.info('ah que coucou');

      setTimeout(() => {
        resolve('yoo !');
      }, 1500);
      //resolve('yoo yoo !');
    });

    callApi.then(item => console.info('promise', item)).then(item => console.info('?', item));
    callApi.then(item => console.info('promise', item));


    // OBSERVABLES____

    const callApi$ = new Observable(observer => {
      console.info('ah que coucou $$$', Math.random() * 100);

      observer.next('1. yoo !');

      // observer.error(new Error('Fail'));

      observer.complete();
      observer.next('10. yoo !');

      observer.next('20. yoo !');

      setTimeout(() => {
        observer.next('3. yoo yoo !');
      }, 0);
    });

    let uneSubscribe = callApi$.subscribe();
    this.subscription.add(uneSubscribe);

    callApi$.subscribe(item => console.info('obs', item),
      err => console.info(err),
      () => console.warn('this is the end'));

    console.info('_____________________');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
