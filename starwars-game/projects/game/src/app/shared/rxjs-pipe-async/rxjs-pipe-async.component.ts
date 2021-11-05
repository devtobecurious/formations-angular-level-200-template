import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { of, Observable, from, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'game-rxjs-pipe-async',
  templateUrl: './rxjs-pipe-async.component.html',
  styleUrls: ['./rxjs-pipe-async.component.css']
})
export class RxjsPipeAsyncComponent implements OnInit, OnDestroy {
  statResult$ !: Observable<number[]>;
  statResultFrom$ !: Observable<number>;

  private stopObservable$ = new Subject<boolean>();
 // @Output()
 // output = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.statResult$ = of([12, 10, 30]);
    from([12, 10, 30]).pipe(
      tap(item => console.info('avant', item)),
      takeUntil(this.stopObservable$),
      tap(item => console.info('apres', item))
    ).subscribe(item => console.info(item));
  }
  ngOnDestroy() {
    this.stopObservable$.next(true);
    this.stopObservable$.unsubscribe();
  }

}
