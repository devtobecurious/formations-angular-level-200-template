import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'game-remind-obs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remind-obs.component.html',
  styleUrls: ['./remind-obs.component.css']
})
export class RemindObsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.info('-----------------------------');

    // setTimeout(() => {
    //   console.info('coucou');
    // }, 0);

    const callback = (mess: any) => console.info(mess);

    const promise = new Promise((resolve, reject) => {
      console.info('0. promesse');

      resolve("=> RETOUR P");
    }).then(callback);

    const obs$ = new Observable<string>(observer => {
      console.info('0. obs');

      observer.next("=> RETOUR O");

      //observer.complete();

      setTimeout(() => {
        observer.next("=> RETOUR O 1");
      }, 0);

      console.info('1. obs');
    });
    obs$
    .pipe(
      map(item => item.toLowerCase()),
      filter(item => item === '1')
    )
    .subscribe(callback,
                   err => console.error(err),
                   () => console.warn('Youpi cest la fin'));
    obs$.subscribe();

    console.info('*****************************');
  }

}
