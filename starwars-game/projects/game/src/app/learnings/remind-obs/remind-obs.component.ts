import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'game-remind-obs',
  templateUrl: './remind-obs.component.html',
  styleUrls: ['./remind-obs.component.css']
})
export class RemindObsComponent  {
  // protected chat = new Promise(revolve => {
  //   console.info('miaou')
  // })

  // COLD Observable
  protected chat$ = new Observable<string>(subscriber => {
    //console.info('miaou')
    subscriber.next('miaou')

    setTimeout(() => {
      //console.info('maowww')
      subscriber.next('maowww')
      subscriber.complete()
    }, 1000)
  })

  counter = 0

  ngOnInit(): void {
    console.info('-----------')

    const chatMape$ = this.chat$
    .pipe(
      tap(item => console.info(item)), // s'exécute lors du next
      map(item => item.toUpperCase()), // s'exécute lors du next
    )

    chatMape$.subscribe({
      next: item => console.info(item),
      complete: () => console.info('FIN : dodo')
    })
    //this.chat$.subscribe()

    // setTimeout(() => {
    //   console.info('ASYNC 01')
    //   //this.counter = 1
    // }, 1500);
    // setTimeout(() => {
    //   console.info('ASYNC 02')
    // }, 500);
    // console.info('ICI ?')

    console.info('*******')
  }
}
