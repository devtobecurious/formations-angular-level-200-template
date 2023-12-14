import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'game-promise-vs-obs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promise-vs-obs.component.html',
  styleUrls: ['./promise-vs-obs.component.css']
})
export class PromiseVsObsComponent {
  ngOnInit(): void {
    console.info('------------------------------');

    // const callBackT = () => {
    //   console.info('coucou');
    // };
    // setTimeout(callBackT, 0);

    const callbackOP = (value: string) => console.info(value);

    // const promise = new Promise<string>((resolve, reject) => { // Eager
    //   console.info('0 - promise'); // SYNC

    //   resolve('1 - promise');
    // }).then(callbackOP);


    // fetch('https://swapi.dev/api/people/1')
    // .then(response => response.json())
    // .then(data => console.info(data));

    const observable$ = new Observable<string>(subscriber => { // Lazy
      console.info('DEBUT - observable'); // SYNC

      // setTimeout(() => {
      //   subscriber.next('next 2 - observable');
      //   //   //   subscriber.complete();
      // }, 0);
      subscriber.next('next 1 - observable');
      subscriber.next('next 3 - observable');
      subscriber.next('next 4 - observable');

      console.info('FIN - observable'); // SYNC
    });

    const observableAvecCache$ = observable$.pipe(shareReplay(2));

    observableAvecCache$.subscribe({
      next: callbackOP,
      complete: () => console.info('complete - observable')
    });
    observableAvecCache$.subscribe({
      next: callbackOP
    });



    console.info('*****************************');
  }
}
