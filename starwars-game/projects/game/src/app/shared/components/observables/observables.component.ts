import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
console.info('0. COUCOU');

    const callback = (item: any) => console.info('==> ==> ', item);

    const promise = new Promise((resolve, reject) => {
      console.info('==> promise');

      resolve('salut P');
      resolve('salut P2');


    }).then(callback);

    const obs$ = new Observable(subscriber => {
      console.info('==> Observable');

      subscriber.next('salut O');
      subscriber.next('salut O1');
      subscriber.next('salut O2');
    });
    obs$.subscribe(callback);
    obs$.subscribe();

    console.info('100. BYEBYE');
  }

}
