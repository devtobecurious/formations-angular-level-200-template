import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-autour-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autour-observables.component.html',
  styleUrls: ['./autour-observables.component.css']
})
export class AutourObservablesComponent  {
  log(): void {
    // console.info('log executée');

  }

  sum(a: number, b: number): number {
    return a + b;
  }

  ngOnInit(): void {
    const callback = (item: unknown) => console.info(item);

    console.info('--------------------');

    const promise = new Promise((resolve, reject) => {
      console.info('00. PROMESSE'); // l'exécution est synchrone

      resolve('==> PPPPPPP');

      setTimeout(() => {
        console.info('01. PROMESSE');
      }, 0);
    }).then(callback);

    const observable$ = new Observable(subscriber => {
      console.info('00. OBSERVABLE');

      subscriber.next('==> OOOOOOO');
      subscriber.next('==> OOOOOO1');

      subscriber.next('==> OOOOOO2');


      setTimeout(() => {
        console.info('01. OBSERVABLE');
        subscriber.next('==> => 01010101010101');
      }, 0);

      subscriber.complete();
      console.info('FIN OBSERVABLE');
    });
    let sub = observable$.subscribe(callback,
                                    err => console.error(err),
                                    () => console.info('YOUPI !!!'));
    sub = observable$.subscribe();

    console.info('*******************');
  }
}
