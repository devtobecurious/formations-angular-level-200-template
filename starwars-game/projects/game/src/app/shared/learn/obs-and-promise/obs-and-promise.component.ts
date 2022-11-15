import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-obs-and-promise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs-and-promise.component.html',
  styleUrls: ['./obs-and-promise.component.css']
})
export class ObsAndPromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.info('------------------------------------------');

    const displayToConsole = (mess: any) => console.info(mess);

    const promise = new Promise((resolve, reject) => {
      console.info('0. PROMESSE');

      resolve('==> RETOUR PROMESSE');

      console.info('1. PROMESSE');
    });
    promise.then(displayToConsole);



    const obs$ = new Observable(observer => {
      console.info('0. OBSERVABLE');

      observer.next('==> RETOUR OBSERVABLE');

      setTimeout(() => {
        observer.next('==> RETOUR OBSERVABLE 2');
      }, 0);

      // observer.complete();

      observer.next('==> RETOUR OBSERVABLE 3');

      console.info('1. OBSERVABLE');
    });
    obs$.subscribe(displayToConsole,
                  err => console.error(err),
                  () => console.info('HEY Cest finiii !!'));
    obs$.subscribe();

    console.info('******************************************');
  }

}
