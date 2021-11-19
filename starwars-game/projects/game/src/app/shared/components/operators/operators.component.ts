import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, pipe, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'game-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, OnDestroy {
  counter$ : Observable<{ id: number, matricule: string}>;
  indicateurComplete$ = new Subject<boolean>();

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
    this.counter$
    .pipe(
      takeUntil(this.indicateurComplete$),
      tap(item => console.info('0. popup ?', item)),
      map(item => {
        const droideBis = {
          id: item.id + 1,
          matricule: '123456' + item.id
        };
        return droideBis;
      }),
      tap(item => console.info('1. popup ?', item)),
    ) // le pipe dans un service
    .subscribe(
      item => console.info(item.matricule) // a chaque next
    );
    // ATTENTION : unsubscribe à faire
  }

  ngOnDestroy(): void {
    this.indicateurComplete$.next(true);
    this.indicateurComplete$.unsubscribe();
  }
}
