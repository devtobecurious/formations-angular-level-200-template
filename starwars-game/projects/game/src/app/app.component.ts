import { ApplicationRef, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'game';

  constructor(private application: ApplicationRef,
              private zone: NgZone,
              private changeDetector: ChangeDetectorRef) {
    this.application.isStable.subscribe(item => console.info('Elle est chargée'));

    // this.changeDetector.detectChanges()
  }
  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      console.info('En dehors des detections de changements des components');
    });
  }




}
