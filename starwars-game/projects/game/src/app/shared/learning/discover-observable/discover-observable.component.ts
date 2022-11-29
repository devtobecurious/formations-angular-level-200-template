import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export type callbackAffichage = (message: unknown) => void;

@Component({
  selector: 'game-discover-observable',
  templateUrl: './discover-observable.component.html',
  styleUrls: ['./discover-observable.component.css']
})
export class DiscoverObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.info('-----------------------------');

    const callBack: callbackAffichage = (message: unknown) => {
      // const v = message.toUpperCase();
      if (typeof(message) === 'string') {
        console.info(message.toLocaleUpperCase());
      }
    };

    const promise = new Promise((resolve, reject) => {
      console.info('0. PROMESSE');
      // setTimeout(() => {
      //   console.info('1. PROMESSE');
      // }, 0);
      resolve("==> Retour Promesse");
    }).then(callBack);


    const observable$ = new Observable(observer => {
      console.info('0. OBSERVABLE');

      setTimeout(() => {
        observer.next('== Retour Observable');
        observer.next('== Retour Observable 1');
        observer.next('== Retour Observable 2');
      }, 0);

      observer.next('== Retour Observable 0');
      observer.complete();

      console.info('encore');
    });
    observable$.subscribe(callBack,
                          err => console.error(err),
                          () => console.info('youpi cest la fin'));
    observable$.subscribe();

    console.info('***************************');
  }

}
