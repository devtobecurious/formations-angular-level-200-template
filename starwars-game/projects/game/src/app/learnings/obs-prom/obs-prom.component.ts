import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IntervalObsService } from '../interval-obs.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'game-obs-prom',
  imports: [AsyncPipe],
  templateUrl: './obs-prom.component.html',
  styleUrl: './obs-prom.component.css'
})
export class ObsPromComponent {
  private readonly service = inject(IntervalObsService)
  item$ = this.service.asObs
  // ngOnInit() {
  //   console.info('-----')


  //   // const sub = obs$.subscribe({
  //   //   next: item => console.info(item)
  //   // })
  //   //const sub2 = obs$.subscribe()

  //   // const promise = new Promise<string>(resolve => {
  //   //   console.info('0. PROMISE')


  //   //   setTimeout(() => {
  //   //     console.info('1. PROMISE')
  //   //   }, 0);

  //   //   resolve('3. PROMISE') // microtask
  //   // }).then( item => console.info(item) )

  //   // setTimeout(() => {
  //   //   console.info('coucou')
  //   // }, 0)

  //   // setTimeout(() => {
  //   //   console.info('coucou 2')
  //   // }, 0)

  //   console.info('*****')
  // }
}
