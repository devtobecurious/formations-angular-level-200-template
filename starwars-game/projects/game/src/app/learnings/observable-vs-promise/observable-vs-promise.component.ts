import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize, Observable, shareReplay } from 'rxjs';

type CallBackAffichage = (message: string) => void;
const affichage: CallBackAffichage = (message: string) => {
  console.time('timer01');
  console.info(message);
  console.timeEnd('timer01');
};

affichage('dfsdfd');

@Component({
  selector: 'game-observable-vs-promise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-vs-promise.component.html',
  styleUrls: ['./observable-vs-promise.component.css']
})
export class ObservableVsPromiseComponent {
  ngOnInit(): void {
    console.info('--------------');


    const promise = new Promise<string>((resolve, reject) => {
      console.info('0. promise');
      setTimeout(() => {
        console.info('-1. setTimeout');
        resolve('2. promesse');
      }, 0);

    }).then(affichage);

    let observable$ = new Observable<string>((observer) => {
      console.info('0. observable');

      setTimeout(() => {
        console.info('-1. observable setTimeout');
        observer.next('2. observable');
        observer.complete();
        observer.next('21. observable');
      }, 0);
    });
    observable$ = observable$.pipe(
      shareReplay(1),
      finalize(() => { console.warn('coucou') })
    )

    observable$.subscribe();
    observable$.subscribe();

    console.info('*******');
  }


}
