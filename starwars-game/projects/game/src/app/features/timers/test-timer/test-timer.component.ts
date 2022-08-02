import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent, interval } from 'rxjs';
import { concatMap, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'game-test-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-timer.component.html',
  styleUrls: ['./test-timer.component.css']
})
export class TestTimerComponent implements OnInit, AfterViewInit {
  @ViewChild('btnStart', {static: false}) button !: any;

  constructor() { }

  ngAfterViewInit(): void {
    const click$ = fromEvent(this.button.nativeElement, 'click');

    // click$.subscribe(item => setInterval(() => console.info('timer'), 1000));

    // click$.subscribe(item => interval(1000).subscribe(i => console.info(i)));

    click$.pipe(
      tap(event => console.info('tap', event)),
      switchMap(event => interval(1000))
    ).subscribe(item => console.info(item));

    click$.pipe(
      tap(event => console.info('tap', event)),
      mergeMap(event => interval(1000))
    ).subscribe(item => console.info(item));

    click$.pipe(
      tap(event => console.info('tap', event)),
      concatMap(event => interval(1000))
    ).subscribe(item => console.info(item));
  }

  ngOnInit(): void {

  }

}
