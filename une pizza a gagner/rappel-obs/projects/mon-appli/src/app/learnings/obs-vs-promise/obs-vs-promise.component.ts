import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-obs-vs-promise',
  templateUrl: './obs-vs-promise.component.html',
  styleUrls: ['./obs-vs-promise.component.css']
})
export class ObsVsPromiseComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.toUnsubscribe.unsubscribe();
  }
  private readonly toUnsubscribe = new Subscription();

  ngOnInit(): void {
    console.info('--------------------');

    const callBackT = () => {
      console.info('Test 01');
      const result = 'Resultat';
    }
    setTimeout(callBackT, 0);

    const callbackRetourPO = (result: string) => console.info(result);

    const promise = new Promise<string>((resolve, reject) => { // EAGER
      console.info('00 ==> Promise'); // SYNC
      setTimeout(() => {
        console.info('01 ==> Promise'); // ASYNC
      }, 0);

      resolve('02 ==> Promise'); // ASYNC
    }).then(callbackRetourPO);

    const observable$ = new Observable<string>((observer) => { // LAZY
      console.info('36 - Observable'); // SYNC
      setTimeout(async () => {
        //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        //   const json = await response.json();

        console.info('41 ==> Observable');
        observer.next('42 ==> Observable');
        observer.complete();
      }, 0);
      //#region Aide fetch
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      //   .then(response => response.json())
      //   .then(json => {
      //     console.info('37 ==> Observable',);
      //     observer.next('38 ==> Observable');
      //     observer.complete();
      //   });
      //#endregion
      observer.next('42 ==> Observable');
      // this // ici c'est le this du component, grâce à l'arrow function
    });

    const memoizedObservable$ = observable$.pipe(
      shareReplay(1)
    );

    memoizedObservable$.pipe(
      map((result) => {
        const calcul = parseInt(result.split(' ')[0]);

        return calcul;
      })
    )
      .subscribe(res => {

      })

    // this.toUnsubscribe.add(memoizedObservable$.subscribe({
    //   next: callbackRetourPO,
    //   complete: () => console.info('complete')
    // }));

    // this.toUnsubscribe.add(memoizedObservable$.subscribe({
    //   next: result => console.warn(result)
    // }));

    // this.toUnsubscribe.add(memoizedObservable$.subscribe());


    console.info('*******************');
  }

  get unParam(): string {
    console.info('get unParam');
    return 'coucou';
  }

  maFunction(): void {
    console.info('ma function');
  }


}

