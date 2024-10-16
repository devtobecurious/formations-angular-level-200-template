import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { finalize, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'game-obs-vs-prom',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './obs-vs-prom.component.html',
  styleUrl: './obs-vs-prom.component.css'
})
export class ObsVsPromComponent {
  private i = 0;

  // COLD =>  partage pas mes données entre subscriber
  obs$ = new Observable(subscriber => { // LAZY, déclaratif
    console.info('0. Observable') // SYNC

    let j = Math.random()

    subscriber.next(j) // SYNC
    setTimeout(() => {
      j = 15000000
      subscriber.next(j)
      subscriber.complete()
    }, 5000)
    console.info('1. Observable', j)// SYNC
  }).pipe(
    shareReplay(1), // HOT Observable
   // finalize(() => alert('je suis abonné sur le complete'))
  )

  ngOnInit(): void {
    console.info('-------')
    console.info('Mon code est SYNC')

    //#region Promesse
    // const promise = new Promise((resolve, reject) => {
    //   console.info('0. Promesse') // SYNC attente traitement lourd
    //   let j = Math.random() // SYNC

    //   setTimeout(() => {
    //     j = 15000000
    //     console.info('P => Hello ' + j)

    //     this.i ++
    //   }, 0)
    //   resolve(j) // ASYNC

    //   console.info('1. Promesse')
    // }).then(item => console.info('Promese, Random', item))
//#endregion

    // const obs$ = new Observable(subscriber => { // LAZY, déclaratif
    //   console.info('0. Observable') // SYNC

    //   let j = Math.random()
    //   setTimeout(() => {
    //     j = 15000000
    //     console.info('P => Hello ' + j)
    //   }, 0)
    //   console.info('1. Observable')// SYNC
    // })
    this.obs$.subscribe({
      next: item => console.info('Mon résultat', item),
      complete: () => alert('fini')
    })

    //this.obs$.subscribe(item => console.info('Mon résultat', item))
    // obs$.subscribe()

    console.info('********')
  }

  logView(): void {
    //console.info('logView')
  }
}
