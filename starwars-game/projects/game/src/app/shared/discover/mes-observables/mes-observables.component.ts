import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'game-mes-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-observables.component.html',
  styleUrls: ['./mes-observables.component.css']
})
export class MesObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const callbackDisplay = (item: any) => console.info(item);

    console.info('00000000000000000000000000000000000000000000');

    const promise = new Promise((resolve, reject) => {
      console.info('0. PROMISE');

      setTimeout(() => {
        console.info('AVANT RESOLVE');
        resolve('RETOUR PROMISE');
        resolve('RETOUR PROMISE 2');
      }, 0);

    }).then(callbackDisplay);

    const resultHot = Math.random();
    const obs$ = new Observable(observer => {
      console.info('0. OBSERVABLE', Math.random(), resultHot);

      observer.next('A. ????????????????');
      observer.next('B. ????????????????');


      observer.complete();

      observer.next('C. ????????????????');
      observer.next('D. ????????????????');

      setTimeout(() => {
        observer.next('E. ????????????????');
        console.info('AVANT NEXT');
        observer.next('RETOUR OBSERVABLE');
      }, 0);

    });

    let obs$AvecPipe = obs$.pipe(
      tap(item => console.info(item)),
      map(item => item + '!!!'),
      tap(item => console.info(item)),
    );

    obs$AvecPipe.subscribe(
      callbackDisplay,
      err => console.error(err),
      () => console.warn('c\'est fini')
    );
    obs$.subscribe();

    console.info('********************************************');
  }

}
