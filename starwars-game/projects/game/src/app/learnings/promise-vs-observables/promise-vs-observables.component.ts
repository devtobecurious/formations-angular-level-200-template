import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'game-promise-vs-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promise-vs-observables.component.html',
  styleUrls: ['./promise-vs-observables.component.css']
})
export class PromiseVsObservablesComponent {
  ngOnInit(): void {
    console.info('---------');

    const callBackAExecuter = () => console.info('Ah que coucou');
    setTimeout(callBackAExecuter, 0);

    const callBackPourPromsseEtObservable = (item: string) => console.info(item);

    const promise = new Promise<string>((resolve, reject) => { // Eager
      console.info('00 - Promesse'); // SYNC
      // setTimeout(() => {
      //   const grosCalcul = 'coucou';
      // }, 0);
      resolve('P - coucou'); // ASYNC
    }).then(callBackPourPromsseEtObservable);

    const obs$ = new Observable<string>(observer => { // LAZY
      console.info('00 - Observable'); // SYNC
      observer.next('O - coucou');
      observer.next('1 - coucou');
      observer.next('2 - coucou'); // SYNC
    });
    const obs2$ = obs$.pipe(shareReplay(2));

    //obs$.subscribe(callBackPourPromsseEtObservable);
    obs2$.subscribe({
      next: callBackPourPromsseEtObservable
    });
    obs2$.subscribe({
      next: callBackPourPromsseEtObservable
    });

    console.info('***********');
  }

  oops(): void {
    console.info('oooppss !');
  }
}
