import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'game-obs-promise',
  imports: [AsyncPipe],
  templateUrl: './obs-promise.component.html',
  styleUrl: './obs-promise.component.css'
})
export class ObsPromiseComponent {

  private readonly list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  protected readonly numbers$ = new Observable<number>(observer => {
    // for (let i = 0; i < 10; i++) {
    //   observer.next(i)
    // }
    let counter = 1
    this.list.forEach(item => {
      setTimeout(() => {
        observer.next(item)
        //observer.complete()
      }, counter++ * 1000)
    })
    // observer.next(10)
  }).pipe(
    filter(item => item % 2 === 0),
    map(item => item * 2),
    map(item => item * 10),
    takeUntilDestroyed()
  )


  ngOnInit(): void {
    console.info('------------')
     this.numbers$.subscribe({
       next: (item) => console.info('O, retour:', item),
       complete: () => console.info('O, complete')
     })


    // console.info('SYNC')

    // const callback = () => {
    //   console.info('ASYNC')
    // }
    // setTimeout(callback, -1)

    // const promise = new Promise<string>((resolve, reject) => {
    //   console.info('0. PROMISE') // SYNC

    //   setTimeout(() => {
    //     console.info('1. PROMISE')
    //   }, 0)

    //   resolve('ASYNC') // micro task
    // })

    // promise
    // .then(item => fetch('https://jsonplaceholder.typicode.com/todos/1'))
    // .then(item => console.info('P, retour:', item))
    // .then(item => console.info('P, retour:', item))

    // Promise.all([
    //   fetch('https://jsonplaceholder.typicode.com/todos/1'),
    //   fetch('https://jsonplaceholder.typicode.com/todos/2'),
    //   fetch('https://jsonplaceholder.typicode.com/todos/3'),
    // ]).then(items => console.info('P, retour:', items))

    // this.getPromise()


    // const obs = new Observable<string>(observer => {
    //   console.info('0. OBS')
    //   let counter = 0

    //   counter ++

    //   observer.next('COUCOU')
    // })

    // obs.subscribe({
    //   next: (item) => console.info('O, retour:', item)
    // })
    //obs.subscribe()

    console.info('************')
  }

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      console.info('0. PROMISE')
    }) //EAGER
  }
}
