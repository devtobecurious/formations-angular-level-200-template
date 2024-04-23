import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, shareReplay, Subscription, takeUntil } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'game-promise-vs-observable',
  standalone: true,
  imports: [],
  templateUrl: './promise-vs-observable.component.html',
  styleUrl: './promise-vs-observable.component.css'
})
export class PromiseVsObservableComponent implements OnInit, OnDestroy {

  title= 'Hello';
  private subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.info('--------------');

    // console.info('Mon code est synchrone');

    // const promise = new Promise<number>((resolve, reject) => { // EAGER
    //   console.info('DEBUT PROMESSE'); // SYNC

    //   setTimeout(() => {
    //     console.info('Appel hyper long d\'une api');

    //     resolve(18000); // ASYNC
    //   }, 1500);
    // }).then(item => console.info('PROMESSE => ', item));


    const observable$ = new Observable<number>(observer => { // LAZY
      console.info('DEBUT OBSERVABLE'); // SYNC

      observer.next(18000); // SYNC
      // observer.complete(); // le complete stop la reference du next vers l'appelant et déclenche le callback du complete

      //setTimeout(() => {
        observer.next(18001); // ASYNC
        observer.next(18010); // ASYNC
        console.info('FIN TIMEOUT');
      //}, 1000);
    }).pipe(shareReplay(1));

    this.subscription.add(observable$.subscribe({
      next: item => console.info('OBSERVABLE => ', item),
      // complete: () => console.info('fini !!!!')
    }));
    observable$.subscribe({
      next: item => console.info('OBSERVABLE 2 => ', item),
    });

    // observable$.pipe(takeUntilDestroyed()).subscribe(); // Chaque subscribe ré-exécute toute la fonction de l'observable

    console.info('*************');
  }

  execute(val: number, val2: number): void {
    // console.info('Appel')
    // setTimeout(() => {
    //   console.info('Mon code est asynchrone');
    // }, 0);
  }

}
