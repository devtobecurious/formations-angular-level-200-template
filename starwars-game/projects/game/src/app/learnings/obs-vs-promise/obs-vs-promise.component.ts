import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable, Subscription, takeUntil } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'

@Component({
  selector: 'game-obs-vs-promise',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './obs-vs-promise.component.html',
  styleUrl: './obs-vs-promise.component.css'
})
export class ObsVsPromiseComponent {
  private readonly parentSubscription = new Subscription()
  obsBis$ = interval(1000)
  obs$ = new Observable<string>(subscriber => { // LAZY
    const test = 'coucou'
    console.info('OBSERVABLE') // SYNC

    subscriber.next('ETAPE 1') // SYNC !

    setTimeout(() => {
      subscriber.next('ETAPE 3') // ASYNC
      console.info('FINI ????')
      subscriber.complete()
      }, 1500);

    subscriber.next('ETAPE 2') // SYNC !
  }).pipe(
    map(item => item.toUpperCase()), //next
    takeUntilDestroyed()
  )


  ngOnDestroy(): void {
    this.parentSubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.info('-------------')

    const promise = new Promise<string>((resolve, reject) => {
      console.info('PROMESSE') // SYNC

      resolve('PROMESSE ==> RETURN') // ASYNC
      setTimeout(() => {
        console.info('ASYNC') // ASYNC
      }, 0);
    }).then(item => console.info(item))

  //const obs$ =
  // this.parentSubscription.add(
  //   this.obs$.subscribe({
  //   next: item => console.info(item),
  //   complete: () => console.info('CAPRI FINI')
  //   }) // EAGER
  // )

  this.obs$.subscribe({
    next: item => console.info(item),
    // complete: () => console.warn('complete')
  })

  // this.parentSubscription.add(
  //   this.obs$.subscribe(item => console.info(item)) // EAGER une nouvelle souscription
  // )
    // console.info('SYNC') // SYNC
    // setTimeout(() => {
    //   console.info('ASYNC') // ASYNC
    // }, 0);

    // obsBis$.subscribe({
    //   next: item => console.info(item)
    // })

    console.info('************')
  }
}
