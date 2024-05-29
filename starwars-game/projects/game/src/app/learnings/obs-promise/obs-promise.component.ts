import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'game-obs-promise',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './obs-promise.component.html',
  styleUrl: './obs-promise.component.css'
})
export class ObsPromiseComponent {
  obs$ = new Observable<string>(observer => {
    console.info('0. OBSERVABLE') // LAZY SYNC
    // setTimeout(() => {
    //   console.info('1. OBSERVABLE')
    // }, 0)

    observer.next('O. RETOUR 1') // SYNC
    setTimeout(() => {
      console.info('O. ASYNC')
      observer.next('O. RETOUR 2') // ASYNC
    }, 1200)
    observer.complete();
    observer.next('O. RETOUR 3') // SYNC
  }).pipe(
    shareReplay(2)
  )

  ngOnInit(): void {
    console.info('---------------------')

    // const promise = new Promise<string>((resolve, reject) => {
    //   console.info('0. PROMISE') // EAGER SYNC

    //   // setTimeout(() => {
    //   //   console.info('1. PROMISE')
    //   // }, 0)

    //   resolve('P. RETOUR') // ASYNC
    //   //reject('ooops')
    // }).then(item => console.info(item))

    // COLD  : un contexte unique à chaque subscribe
    // const obs$ = new Observable<string>(observer => {
    //   console.info('0. OBSERVABLE') // LAZY SYNC
    //   // setTimeout(() => {
    //   //   console.info('1. OBSERVABLE')
    //   // }, 0)

    //   observer.next('O. RETOUR 1') // SYNC
    //   setTimeout(() => {
    //     console.info('O. ASYNC')
    //     observer.next('O. RETOUR 2') // ASYNC
    //   }, 0)
    //   observer.complete();
    //   observer.next('O. RETOUR 3') // SYNC
    // })
    // const subscription = obs$.subscribe({
    //   next: item => console.info(item),
    //   complete: () => console.info('c\'est la fin')
    // })

    // const subscription2 = obs$.subscribe()
    // obs$.subscribe()


    // setTimeout(() => {
    //   console.info('ASYNC 2')
    // }, 0)

    console.info('*********************')
  }
}
