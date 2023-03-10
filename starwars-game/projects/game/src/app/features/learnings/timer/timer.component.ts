import { AfterViewChecked, AfterViewInit, ApplicationRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { concatMap, exhaustMap, fromEvent, interval, mergeMap, switchMap, tap } from 'rxjs';

@Component({
  selector: 'game-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements AfterViewChecked, AfterViewInit {
  timer = 0;
  @ViewChild('btn') btnElement !: ElementRef<HTMLButtonElement>;

  constructor(private readonly zone: NgZone, private readonly application: ApplicationRef) {
  }

  ngAfterViewChecked(): void {
    console.info('TimerComponent::ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    // je suis dans la zone, donc je déclenche le détect changes dans toute l'appli
    // fromEvent(this.btnElement.nativeElement, 'click').subscribe(item => {
    //   console.info(item);
    //   this.timer ++;
    //   // this.application.tick();
    // });


    this.zone.runOutsideAngular(() => {


      // Jamais de subscribe dans le subscribe
      // fromEvent(this.btnElement.nativeElement, 'click').subscribe(item => {
      //   interval(1000).subscribe(item => console.info(`tick-${item}`));

      //   this.btnElement.nativeElement.style.color = 'red';


      //   // this.zone.run(() => console.info('rafraichissement'));
      //   // this.application.tick();


      // });

      const callback = (item: number) => console.info(`tick-${item}`);

      // fromEvent(this.btnElement.nativeElement, 'click')
      // .pipe(
      //   mergeMap(pointer => interval(1000))
      // )
      // .subscribe(callback);

      // fromEvent(this.btnElement.nativeElement, 'click')
      // .pipe(
      //   tap(pointer => console.info('pointer')),
      //   concatMap(pointer => interval(1000))
      // )
      // .subscribe(callback);

      fromEvent(this.btnElement.nativeElement, 'click')
      .pipe(
        tap(pointer => console.info('pointer')),
        exhaustMap(pointer => interval(1000))
      )
      .subscribe(callback);

    });
  }

  start(): void {
  }
}
