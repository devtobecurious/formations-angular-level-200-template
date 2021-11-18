import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-discover-observables',
  templateUrl: './discover-observables.component.html',
  styleUrls: ['./discover-observables.component.css']
})
export class DiscoverObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.info('===> 1. START ====');
    const getData = new Promise((resolve, reject) => {
      const rand = Math.random() * 100;
      console.info('promise - je suis appelée', rand);

      setTimeout(() => {
        const data = { id: 1, matricule: '5357' };
        resolve(data);
      }, 1500);
    }).then(item => console.info('===> promise, return', item));

    const getData$ = new Observable(observer => {
      const rand = Math.random() * 100;
      console.info('observable - je suis appelée', rand);

      setTimeout(() => {
        const data = { id: 1, matricule: '5357' };
        observer.next(data);
      }, 1500);
    });
    getData$.subscribe(item => console.info('===> observable, return', item));
    getData$.subscribe();
    console.info('===> 100. END ====');
  }

}
