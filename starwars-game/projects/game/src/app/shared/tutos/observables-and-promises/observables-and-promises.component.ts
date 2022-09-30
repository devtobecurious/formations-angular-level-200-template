import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'game-observables-and-promises',
  templateUrl: './observables-and-promises.component.html',
  styleUrls: ['./observables-and-promises.component.css']
})
export class ObservablesAndPromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.info('000000000000000000000000');

    const callBack = (item: any) => console.info(item);

    const promesse = new Promise((resolve, reject) => {
      console.info('0. Promesse -> http');

      resolve('Promesse - retour Api');
    }).then(callBack);

    // const subject = new Subject();



    const observable = new Observable(observer => {
      console.info('0. Observable');

      observer.next('Observable - retour Api 1');
      observer.next('Observable - retour Api 10');

      observer.complete();

      setTimeout(() => {
        observer.next('Observable - retour Api 2');
      }, 0);

    });



    var observer = observable.pipe(map(item => item + "?????"))
                             .subscribe(
                                callBack,
                                err => console.error(err),
                                () => console.info('VIVA LE COMPLETE'));

    var observerBis = observable.subscribe();

    // setTimeout(() => {
    //   console.info('et ici ?');
    // }, 0);

    console.info('111111111111111111111111');
  }

}
