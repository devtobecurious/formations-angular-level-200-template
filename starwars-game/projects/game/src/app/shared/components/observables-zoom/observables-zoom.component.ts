import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { delay, map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'game-observables-zoom',
  templateUrl: './observables-zoom.component.html',
  styleUrls: ['./observables-zoom.component.css']
})
export class ObservablesZoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const valeur = Math.random();

    // const uneFonction = () => {
    //   return Math.random();
    // }

    // // Product =>
    // const observable$ = new Observable(subscriber => {
    //   console.info('COLD : je m\'exécute', Math.random());
    //   console.info('HOT : je m\'exécute', valeur);
    //   console.info('COLD or HOT : je m\'exécute', uneFonction());

    //   subscriber.next(1);
    //   subscriber.next(2);

    //   subscriber.error(new Error(''));

    //   subscriber.complete();

    //   subscriber.next(3);

    //   setTimeout(() => {
    //     subscriber.next('!!! coucou !!!');
    //   }, 0);

    // });

    // Consume =>
    // observable$.subscribe(
    //   item => console.info('ma valeur', item),
    //   err => console.error('ooppsssssssssssssssssss'),
    //   () => console.info('COMPLETE')
    // );
    // observable$.subscribe();


    const first$ = new Observable<string>(observer => {
      observer.next('1.0');
      observer.next('2.0');
    });


    const api$ = new Observable<string>(observer => {
      observer.next('version 1');
      observer.next('version 2');
    });

    // first$.subscribe(item => {
    //   console.info('yeah je subscribe first ', item);

    //   api$.subscribe(item2 => {
    //     console.info('item1 + item2', (item + item2));
    //   });
    // });

    const getConcat = (enter:string) => of(enter).pipe(delay(1000));

    // dans un service
    const obs$ = first$.
    pipe(
      tap(item => console.info('avant', item)),
      // mergeMap(item => api$),
      mergeMap(item => getConcat(item)),
      map(item => item + '>'),
      tap(item => console.info('apres', item)),
    );

    // dans un component
    obs$.subscribe(result => {
      console.info(result);
    });
  }

}
