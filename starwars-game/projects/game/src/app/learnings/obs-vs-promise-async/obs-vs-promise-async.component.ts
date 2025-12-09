import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'game-obs-vs-promise-async',
  templateUrl: './obs-vs-promise-async.component.html',
  styleUrl: './obs-vs-promise-async.component.css'
})
export class ObsVsPromiseAsyncComponent implements OnInit {
  ngOnInit(): void {
    console.log('-------');

    setTimeout(() => { // macro tasking
      console.info('0. Inside setTimeout');
    }, 0);

    // const promise = new Promise<string>((resolve) => { // EAGER execution
    //   console.info('0. Inside Promise'); // SYNC
    //   resolve('1. PROMISE'); // ASYNC, micro tasking
    // });

    // promise.then((res) => {
    //   console.info(res);  // ASYNC, micro tasking
    // });

    const obs$ = new Observable<string>((subscriber) => { // LAZY execution
      console.info('0. Inside Observable'); // SYNC
      setTimeout(() => {
        subscriber.next('1. OBSERVABLE - ' + Math.random()); // ASYNC
        subscriber.next('2. OBSERVABLE - ' + Math.random()); // ASYNC
      }, 0);
      subscriber.complete();
    }).pipe(shareReplay(1));

    obs$.subscribe({
      next: (res) => console.info(res)
    });
    obs$.subscribe({
      next: (res) => console.info(res)
    });
    //obs$.subscribe();



    console.info('*******');
  }

}
