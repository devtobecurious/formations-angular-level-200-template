import { fromEvent, interval, Observable } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { mergeMap, switchMap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'game-count-click',
  templateUrl: './count-click.component.html',
  styleUrls: ['./count-click.component.css']
})
export class CountClickComponent implements OnInit, AfterViewInit {

  @ViewChild('myButton') button !: ElementRef;
  click$ !: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.click$ = fromEvent(this.button.nativeElement, 'click');

    // this.click$.pipe(
    //   switchMap(item => interval(500))
    // ).subscribe(item => console.info('click ?', item));

    // this.click$.pipe(
    //   mergeMap(item => interval(500))
    // ).subscribe(item => console.info('click ?', item));

    this.click$.pipe(
      concatMap(item => interval(500))
    ).subscribe(item => console.info('click ?', item));
  }

}
