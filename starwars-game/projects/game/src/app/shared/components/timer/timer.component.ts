import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { concatMap, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'game-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, AfterViewInit {
  @ViewChild('clickButton') button: any;
  private click$ !: Observable<any>;

  constructor() {

  }

  ngAfterViewInit(): void {
    this.click$ = fromEvent(this.button.nativeElement, 'click');

    // pas bien !! car subscribe dans subscribe
    // this.click$.subscribe(item => interval(1000).subscribe(item => console.info(item)));

    // this.click$
    // .pipe(
    //   tap(pointer => console.info('Au click', pointer)), // a chaque click, donc à chaque next de l'obs parente
    //   mergeMap(pointer => interval(1000)) // on souscrit à l'observable enfant (donc interval), puis à chaque next enfant, on fait un next à la place du parent
    // )

    // this.click$
    // .pipe(
    //   tap(pointer => console.info('Au click', pointer)), // a chaque click, donc à chaque next de l'obs parente
    //   concatMap(pointer => interval(1000)) // on souscrit à l'observable enfant (donc interval), puis à chaque next enfant, on fait un next à la place du parent
    // )
    this.click$
    .pipe(
      tap(pointer => console.info('Au click', pointer)), // a chaque click, donc à chaque next de l'obs parente
      switchMap(pointer => interval(1000)), // on souscrit à l'observable enfant (donc interval), puis à chaque next enfant, on fait un next à la place du parent
      tap(tick => console.info('Au tick de l\'interval', tick)),
    )
    .subscribe(tick => console.info(tick));
  }

  ngOnInit(): void {
  }

  start(): void {
    interval(1000).subscribe(item => console.info(item));
  }

}
