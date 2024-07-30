import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'game-fight-prom-obs',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './fight-prom-obs.component.html',
  styleUrl: './fight-prom-obs.component.css'
})
export class FightPromObsComponent {

  obs$ = new Observable<string>(subscriber => { // LAZY
    const random = Math.random() // COLD
    console.info('0. OBSERVABLE') // SYNC
    subscriber.next('0 1 2 3 4 5 6 7 8 9 10') // SYNC

    setTimeout(() => {
      subscriber.next(random.toString()) // ASYNC
      subscriber.complete()
    }, 1500)

    console.info('01. FIN OBSERVABLE') // SYNC
  }).pipe(
    shareReplay()
  )

  ngOnInit(): void {
    console.info('-----------------')

    console.info('SYNC')

    // setTimeout(() => {
    //   console.info('ASYNC')
    // }, 0)

    const promise = new Promise<string>((resolve, reject) => { // EAGER
      console.info('0. PROMISE') // SYNC

      setTimeout(() => {
        console.info('1 . PROMISE')
      }, 0)

      resolve('0 1 2 3 4 5 6 7 8 9 10') // ASYNC
    }).then(item => console.info('PROMISE', item))

    // const randomHot = Math.random() // HOT
    // this.obs$.subscribe({
    //   next: item => console.info('OBSERVABLE', item),
    //   complete: () => console.info('COMPLETE')
    // })
    // this.obs$.subscribe({
    //   next: item => console.info('OBSERVABLE 2', item),
    // })

    console.info('*****************')
  }
}
