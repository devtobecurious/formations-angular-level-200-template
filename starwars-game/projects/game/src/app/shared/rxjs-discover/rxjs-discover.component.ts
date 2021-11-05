import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-rxjs-discover',
  templateUrl: './rxjs-discover.component.html',
  styleUrls: ['./rxjs-discover.component.css']
})
export class RxjsDiscoverComponent implements OnInit {

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

      observer.complete();
      observer.next('10. yoo !');

      observer.next('20. yoo !');

      setTimeout(() => {
        observer.next('3. yoo yoo !');
      }, 0);
    });

    callApi$.subscribe();
    callApi$.subscribe(item => console.info('obs', item),
                        null,
                        () => console.warn('this is the end'));

    console.info('_____________________');
  }

}
