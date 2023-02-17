import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, concatMap, fromEvent, interval, mergeMap, switchMap, tap } from 'rxjs';

@Component({
  selector: 'game-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements AfterViewInit {
  @ViewChild("start", { static: false}) start !: ElementRef;
  onClick$ !: Observable<unknown>;
  timer$ = interval(1000);

  timerApresTraitement$ !: Observable<number>;

  ngAfterViewInit(): void {
    this.onClick$ = fromEvent(this.start.nativeElement, 'click');

    // on s'abonne à l'enfant, pour chaque next, même si l'ancien enfant n'a pas complete
    // this.timerApresTraitement$ = this.onClick$.pipe(
    //   mergeMap(pointer => this.timer$)
    // );

    // on s'abonne à l'enfant, au nouveau next du parent si et seulement si l'enfant l'ancienne enfant a fait un complete
    // this.timerApresTraitement$ = this.onClick$.pipe(
    //   tap(item => console.info(item)),
    //   concatMap(pointer => this.timer$)
    // );

    // on s'abonne sur l'enfant, en se désabonnant de l'ancienne enfant, au nouveau next
    this.timerApresTraitement$ = this.onClick$.pipe(
      tap(item => console.info(item)),
      switchMap(pointer => this.timer$)
    );
  }

}
