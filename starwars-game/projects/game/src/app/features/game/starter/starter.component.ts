import { Component, ElementRef, ViewChild, AfterViewInit, output } from '@angular/core';
import { concatMap, fromEvent, interval, mergeMap, Observable, switchMap, take, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'game-starter',
  imports: [AsyncPipe],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.css'
})
export class StarterComponent implements AfterViewInit {
  @ViewChild('btnStart') 
  private readonly btnStart!: ElementRef<HTMLButtonElement>;
  private readonly enfant$ = interval(1000).pipe(
    take(10),
    // complete ici ?
  ); // amélioration de perf ?
  protected counter = 0 ;
  
  countStarted = output<boolean>();
  countStopped = output<boolean>();

  ngOnInit() {
    
    // this.intervalCount$.subscribe((count) => {
    //   console.log('count', count);
    // });
  }

  ngAfterViewInit(): void {
    const btnStart$ = fromEvent(this.btnStart.nativeElement, 'click');

    btnStart$.pipe(
      tap(() => this.countStarted.emit(true)),
      switchMap(() => this.enfant$)
    ).subscribe({
      next: (count) => {
        this.counter = count;
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
