import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { concatMap, fromEvent, interval, map, mergeMap, Observable, switchMap, take } from 'rxjs';

@Component({
  selector: 'game-timer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit {
  @ViewChild('btnStart', {static: true}) btnStart !: ElementRef<HTMLButtonElement>
  //btnStart = viewChild<ElementRef<HTMLButtonElement>>('btnStart');
  ecouteClick$! : Observable<any>
  timer$: Observable<number> | undefined

  ngOnInit(): void {
    this.ecouteClick$ = fromEvent(this.btnStart.nativeElement, 'click')

    // PAS BIEN : doom pyramide + multi subscribe
    // this.ecouteClick$.subscribe({
    //   next: evt => {
    //     interval(1000).subscribe({
    //       next: tick => {
    //         console.info(tick)
    //       }
    //     })
    //   }
    // })

    // PAS BON : en fait on a 2 observable : parente et enfante
    // this.ecouteClick$.
    // pipe(
    //   map(evt => interval(1000))
    // ).subscribe(inter => {
    //   inter.subscribe(tick => {
    //     console.info(tick);
    //   })
    // })

    const enfante$ = interval(1000)//.pipe(take(10));

    this.timer$ = this.ecouteClick$. // parente
    pipe(
      // mergeMap(evt => enfante$) // on n'attend pas ni le complete ni rien du tout pour re subscribe au nouveau clik/next
      // concatMap(evt => enfante$) // on attend le complete de l'enfant en cours de subscribe pour subscribe sur un nouvel enfant
      switchMap(evt => enfante$) // on se désabonne du dernier subscribe de l'enfant pour resubscribe
    )
  }

  // start(): void {
  //   console.info('start');
  // }
}
