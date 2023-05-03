import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerType } from './types';
import { concatMap, fromEvent, interval, map, mergeMap, Observable, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'game-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements AfterViewInit {
  @ViewChild('timer') timer !: ElementRef<HTMLButtonElement>;
  timer$ !: Observable<any>;

  ngAfterViewInit(): void {
    // fromEvent(this.timer.nativeElement, 'click').pipe(
    //   tap(() => console.info('on click'))
    // ).subscribe(ret => {
    //   interval(1000).subscribe(time => {
    //     console.info(time);
    //   });
    // });
    // fromEvent(this.timer.nativeElement, 'click').pipe(
    //   tap(() => console.info('on click')),
    //   map(() => interval(1000)),
    // ).subscribe(ret => {
    //   ret.subscribe(time => {
    //     console.info(time);
    //   });
    // });
    fromEvent(this.timer.nativeElement, 'click').pipe(
      tap(() => console.info('on click')),
      switchMap(() => interval(1000)),
      tap(res => console.info(res)),
    ).subscribe(ret => {
      //ret.subscribe(time => {
      console.info(ret);
      //});
    });
  }
  buttonTitle: TimerType = 'Start';


}
