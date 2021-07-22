import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-observables-zoom',
  templateUrl: './observables-zoom.component.html',
  styleUrls: ['./observables-zoom.component.css']
})
export class ObservablesZoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const valeur = Math.random();

    const uneFonction = () => {
      return Math.random();
    }

    // Product =>
    const observable$ = new Observable(subscriber => {
      console.info('COLD : je m\'exécute', Math.random());
      console.info('HOT : je m\'exécute', valeur);
      console.info('COLD or HOT : je m\'exécute', uneFonction());

      subscriber.next(1);
      subscriber.next(2);

      subscriber.error(new Error(''));

      subscriber.complete();

      subscriber.next(3);

      setTimeout(() => {
        subscriber.next('!!! coucou !!!');
      }, 0);

    });

    // Consume =>
    observable$.subscribe(
      item => console.info('ma valeur', item),
      err => console.error('ooppsssssssssssssssssss'),
      () => console.info('COMPLETE')
    );
    observable$.subscribe();

    console.info('je suis à la fin de mon init');
  }

}
