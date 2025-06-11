import { Component, inject, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { BusinessService } from '../business.service';

@Component({
  selector: 'game-remind-obs',
  templateUrl: './remind-obs.component.html',
  styleUrls: ['./remind-obs.component.css']
})
export class RemindObsComponent  {
  // protected chat = new Promise(revolve => {
  //   console.info('miaou')
  // })
  obs$ = inject(BusinessService).getOne()

  counter = 0

  ngOnInit(): void {
    console.info('-----------')

    this.obs$.subscribe({
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
