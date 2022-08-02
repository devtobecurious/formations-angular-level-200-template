import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../core/models/user';

@Component({
  selector: 'game-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.info('0. START');

    const user: User = {
      surname: 'Doe',
      arme: 'Laser',
      imageUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    };

    const callback = (user: any) => console.info('1. callback', user);

    const promise = new Promise((resolve, reject) => {
      console.info('1. PROMISE');

      // ca vient de l'api
      resolve(user);
      // resolve(user);
    }).then(callback);

    const observable$ = new Observable((observer) => {
      console.info('1. OBSERVABLE');

      observer.next(user);

      observer.complete();

      setTimeout(() => {
        for(let i=0; i<10; i++) {
          observer.next(user);
        }
      }, 0);
    });
    observable$.subscribe();
    observable$.subscribe(
                          callback,
                          err => console.error('1. ERROR', err),
                          () => console.info('1. COMPLETE'));

    console.info('100. FIN DE LA FONCTION');
  }

  // executePromise() {
  //   return new Promise();
  // }

}
