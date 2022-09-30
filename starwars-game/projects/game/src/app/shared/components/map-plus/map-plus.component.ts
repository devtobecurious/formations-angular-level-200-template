import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent, interval, Observable } from 'rxjs';
import { concatMap, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'game-map-plus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-plus.component.html',
  styleUrls: ['./map-plus.component.css']
})
export class MapPlusComponent implements OnInit, AfterViewInit {
  @ViewChild('startTime') button !: any;
  clicks$ !: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');

    let counter = 0;
    // this.clicks$.subscribe(item => {
    //     interval(1000).subscribe(item => console.info(item));
    // });

    // const obs$ = this.clicks$.pipe(
    //   mergeMap(item => interval(1000))
    // );

    // const obs$ = this.clicks$.pipe(
    //   tap(item => console.info('je click', item)),
    //   concatMap(item => interval(1000))
    // );

    const obs$ = this.clicks$.pipe(
      tap(item => console.info('je click', item)),
      switchMap(item => interval(1000))
    );

    obs$.subscribe(item => console.info(item));
  }

}
