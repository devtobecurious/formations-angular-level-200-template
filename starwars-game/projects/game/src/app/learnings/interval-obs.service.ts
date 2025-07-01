import { Injectable } from '@angular/core';
import { map, Observable, retry, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalObsService {
 private readonly obs$ = new Observable<string>(subscriber => {
      console.info('0. OBSERVABLE')


      // setTimeout(() => {
      //   console.info('1. OBSERVABLE')
      //   subscriber.next('3. OBSERVABLE')
      //   subscriber.next('4. OBSERVABLE')
      // }, 0)

      setTimeout(() => {
        const val = Math.random()
        console.info('coucou', val)
        subscriber.next(`${val}`)
      }, 1000);

      setTimeout(() => {
        const val = Math.random()
        console.info('coucou 2', val)
        subscriber.next(`${val}`)
      }, 1500);

      setTimeout(() => {
        const val = Math.random()
        console.info('coucou 3', val)
        subscriber.next(`${val}`)
      }, 2000);

    }).pipe(
      retry(1),
      shareReplay(3)
  )

    get asObs() {
      return this.obs$.pipe(
        map(item => item + ' --> '),
        map(item => item.replace('--', '..'))
      );
    }

}
