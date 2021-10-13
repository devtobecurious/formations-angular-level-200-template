import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'game-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  private subject = new Subject<boolean>();
  droides$ !: Observable<string[]>;

  constructor() { }



  ngOnInit(): void {

    const randValue = Math.random() * 100;

    this.droides$ = new Observable(observer => {
      observer.next([
        'droide' +  (Math.random() * 100),
        'droide' +  (Math.random() * 100),
        'droide' +  randValue
      ]);

      setTimeout(() => {
        observer.next([
          'droide' +  (Math.random() * 100),
          'droide' +  (Math.random() * 100),
          'droide' +  (Math.random() * 100)
        ]);
      }, 1500);
    });

    //console.info('----- DEMARRAGE -----');
    const promise = new Promise((resolve, reject) => {
      console.info('promise exécutée');
    });

    //console.info('----- AVANT OBSERVABLE -----');
    const obs$ = new Observable(observer => {
      console.info('obs exécutée', Math.random());

      observer.next('hello');
      observer.next({
        name: 'luke'
      });

      // observer.error(new Error('OOPS I DID IT AGAIN !!'));
      observer.complete();

      for (let index = 0; index < 30; index++) {
        observer.next(index);
      }

      setTimeout(() => {
        observer.next(Math.random() * 1000);
      }, 100);

      console.info('====== fin dexécution de lobs ===');
    });


    // obs$.subscribe(item => console.info('callback =>', item),
    //                error => console.info(error),
    //                () => { console.info('COMPLETE !!!! YATAAAAA !! ') });
    // obs$.subscribe(function(item) {
    //   console.info('callback =>', this);
    // });

    obs$
    .pipe(
      tap(item => console.info('1. HEY je vérifie sans modifie', item)),
      map(item => item + '!!'),
      tap(item => console.info('2. HEY je vérifie sans modifie', item)),
      map(item => item + '??'),
      takeUntil(this.subject)
    )
    .subscribe();

    const maFonc = (observer: any) => {
      console.info('obs exécutée');
    };

    const obs2$ = new Observable(maFonc);

    console.info('----- END -----');
  }

  ngOnDestroy(): void {
    this.subject.next(true);
    this.subject.unsubscribe();
  }

}
