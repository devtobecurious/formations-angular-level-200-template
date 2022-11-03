import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'game-discover-obs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover-obs.component.html',
  styleUrls: ['./discover-obs.component.css']
})
export class DiscoverObsComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor() { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.info('0000000000000000000000000000000000');

    const callback = (item: any) => console.info(item);

    const prom = new Promise((resolve, reject) => {
      console.info('00. PROMESSE');

      setTimeout(() => {
        resolve('=> retour Promesse');
      }, 0);

      console.info('11. PROMESSE ');
    }).then(callback);

    const obs$ = new Observable<string>(observer => {
      console.info('00. OBSERVABLE');

      setTimeout(() => {
        observer.next('=> retour Observable');
      }, 0);
      observer.complete();
      observer.next('=> retour Observable 2');

      console.info('11. OBSERVABLE ');
    });
    const monObsAvecOperator$ = obs$
      .pipe(
        tap(item => console.info('Je check avant transformation', item)),
        map(item => 1),
        tap(item => console.info('Je check apres transformation', item)),
      );


    const sub = monObsAvecOperator$.subscribe(callback,
      err => console.error(''),
      () => console.info('Complete !!!'));
    this.subscription.add(sub);

    this.subscription.add(obs$.subscribe());

    console.info('****************************************');
  }

}
