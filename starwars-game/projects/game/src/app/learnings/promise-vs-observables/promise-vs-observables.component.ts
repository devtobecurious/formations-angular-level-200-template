import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, finalize, shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'game-promise-vs-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promise-vs-observables.component.html',
  styleUrls: ['./promise-vs-observables.component.css']
})
export class PromiseVsObservablesComponent {
  // private http = inject(HttpClient);

  ngOnInit(): void {
    // const livres$ = this.http.get('sdsdsds');

    // livres$.subscribe({
    //   next: items => {

    //   }
    // })


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
      setTimeout(() => {
        observer.next('1 - coucou');
        observer.complete();
      }, 0);
      observer.next('2 - coucou'); // SYNC

    });

    obs$.pipe(
      tap(item => console.info('tap', item)),
      tap(item => console.info('tap2', item)),
      finalize(() => console.info('la fin'))
    ).subscribe({
      next: callBackPourPromsseEtObservable
    })

    // const obs2$ = obs$.pipe(shareReplay(2));

    // //obs$.subscribe(callBackPourPromsseEtObservable);
    // obs2$.subscribe({
    //   next: callBackPourPromsseEtObservable,
    //   complete: () => console.info('Hey cest fini')
    // });
    // obs2$.subscribe({
    //   next: callBackPourPromsseEtObservable,
    //   complete: () => console.info('Hey cest fini 2')
    // });

    console.info('***********');
  }

  oops(): void {
    console.info('oooppss !');
  }
}
