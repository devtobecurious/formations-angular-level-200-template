import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.info('0000000000000000000000000');

    const functionAExecuter = (resolve: Function, reject: Function) => {
      console.info('PROMISE');

      resolve('retour promise');
    }

    const promise = new Promise(functionAExecuter);
    promise.then(item => console.info('==> Promise', item));

    const obs$ = new Observable(subscriber => {
      console.info('OBSERVABLE');
      console.info('OBSERVABLE 2 ');
      console.info('OBSERVABLE 3 ');


      setTimeout(() => {
        subscriber.next('retour observable');
      }, 0);
      subscriber.next('1. retour observable 2');
      subscriber.next('2. retour observable 3');
      subscriber.next('3. retour observable 4');
      subscriber.next('4. retour observable 5');

      console.info('a la fin de lobs');
      subscriber.complete();
    });

    // const callbackObs = (item: any) => {
    //   obs$.subscribe(callbackObs);
    //   console.info('==> Observable', item)
    // };

    const callbackObs = (item: any) => console.info('==> Observable', item);
    obs$.subscribe(callbackObs,
                   err => {},
                   () => {
                    console.info('cest la fin !')
                   });

    obs$.subscribe(callbackObs);

    // setTimeout(() => {
    //   console.info('Apres ?');
    // }, -1);

    console.info('#########################');
  }

  returnPromise() {
    return new Promise((resolve, reject) => {
      console.info('PROMISE');
    });
  }

}
