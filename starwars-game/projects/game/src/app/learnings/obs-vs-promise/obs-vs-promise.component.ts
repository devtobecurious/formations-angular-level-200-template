import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'game-obs-vs-promise',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './obs-vs-promise.component.html',
  styleUrl: './obs-vs-promise.component.css'
})
export class ObsVsPromiseComponent {
  // HOT : PARTAGE DE MEME VALEUR POUR N SUBSCRIBE
  obs$ = new Observable<string>(subscriber => { // LAZY => Declaratif
    // COLD  OBSERVABLE
    const value = Math.random() * 10
    subscriber.next('STAR WARS ' + value) // SYNC
    setTimeout(() => {
      subscriber.next('STAR WARS ' + Math.random()) // ASYNC
    }, 1500);
  }).pipe(
    shareReplay(2)
    // map(item => item.toLowerCase()) // ASYNC
  )

  // prom = () => new Promise<string>((resolve, reject) => { // EAGER => Impératif
  //   console.info('0.1. PROMISE') // SYNC de BASE ;)
  // })

  ngOnInit(): void {
    console.info('-------------')

    // console.info('SYNC')
    // setTimeout(() => {
    //   console.info('ASYNC')
    // }, 0);
    const promise = new Promise<string>((resolve, reject) => { // EAGER => Impératif
      console.info('0. PROMISE') // SYNC de BASE ;)

      resolve('STAR WARS') // ASYNC
    }).then(item => console.info('0', item))

    // const obs$ = new Observable<string>(subscriber => { // LAZY => Declaratif
    //   console.info('0. OBSERVABLE') // SYNC DE BASE =P
    // })
    this.obs$.subscribe({
      next: item => console.info('OBS', item)
    })
    //this.obs$.subscribe()


    console.info('***********')
  }
}
