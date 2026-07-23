import { Component, ElementRef, ViewChild, AfterViewInit, output, inject, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { concatMap, exhaustMap, finalize, fromEvent, interval, map, mergeMap, Observable, switchMap, take, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

const nbCount = 10;

@Component({
  selector: 'game-starter',
  imports: [AsyncPipe],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarterComponent implements AfterViewInit {
  private readonly zone = inject(NgZone);
  private readonly cdr = inject(ChangeDetectorRef);
  
  @ViewChild('btnStart',  {static: true}) 
  private readonly btnStart!: ElementRef<HTMLButtonElement>;

  private readonly enfant$ = interval(1000).pipe(
    map((count) => nbCount - count),
    take(nbCount),
    finalize(() =>  this.countStopped.emit(true))
  ); // amélioration de perf ?
  protected counter = nbCount;
  
  countStarted = output<boolean>();
  countStopped = output<boolean>();

  ngOnInit() {
    
    // this.zone.runOutsideAngular(() => {
    //   this.enfant$.subscribe({
    //     next: (count) => {
    //       console.log('count', count);
    //     },
    //     complete: () => {
    //       this.zone.run(() => {
    //         this.countStopped.emit(true);
    //       });
    //     }
    //   });

    // this.intervalCount$.subscribe((count) => {
    //   console.log('count', count);
    // });
  }

  ngAfterViewInit(): void {
    const btnStart$ = fromEvent(this.btnStart.nativeElement, 'click');

    btnStart$.pipe(
      tap((evt) => this.countStarted.emit(true)),
//      switchMap(() => this.enfant$),
        exhaustMap(() => this.enfant$),
//      takeUntilDestroyed()
      //tap((count) => console.log('count', count))
    ).subscribe({
      next: (count) => {
        this.counter = count;
        this.cdr.markForCheck();
      },
      // complete: () => {
      //   this.countStopped.emit(true);
      // }
    });
  }

  // protected readonly intervalCount$ = new Observable<number>((subscriber) => {
  //   let count = 0;
  //   const intervalId = setInterval(() => {
  //     subscriber.next(count++);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // });

    
}
