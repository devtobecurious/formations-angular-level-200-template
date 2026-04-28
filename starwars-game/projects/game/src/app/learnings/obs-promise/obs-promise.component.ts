import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-obs-promise',
  imports: [],
  templateUrl: './obs-promise.component.html',
  styleUrl: './obs-promise.component.css'
})
export class ObsPromiseComponent {
    private readonly obs$ = new Observable(observer => {
      observer.next('Hello');
      // setTimeout(() => {
      //   observer.next('Ca va ?');
      //   observer.complete();
      // }, 0);

      // setInterval(() => {
      //   observer.next('Ca va ?');
      // }, 1000);

      observer.next('Et toi ?');

      console.info('Observable completed', Math.random() * 100);
    });

  ngOnInit(): void {
    console.info('-----------');

    setTimeout(() => {
      console.info('Timeout completed');
    }, 1000);

    // const promise = new Promise((resolve, reject) => {
    //   console.info('Promise executor');
    //   resolve('Promise resolved value');
    // });

   // promise.then (value => console.info('Promise then', value));


    this.obs$.subscribe({
      next: value => console.log('Value from observable', value),
    });
    // obs$.subscribe();



    console.info('*************');
  }
}
