import { Component, NgZone, inject } from '@angular/core';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';
  zone = inject(NgZone);

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.title = 'Vive Star wars !';
        this.title = 'Vive Star wars !!';

        this.zone.run(() => {
          this.title  = 'Youpi !';
        });
      }, 1500);
    });
  }
}
