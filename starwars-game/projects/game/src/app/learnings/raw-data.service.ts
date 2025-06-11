import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawDataService {
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

    getOne(): Observable<string> {
      return this.chat$
    }
}
