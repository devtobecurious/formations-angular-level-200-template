import { Component, inject, NgZone } from '@angular/core';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly zone = inject(NgZone);
  title = 'Star wars game';

  ngOnInit(): void {

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.title = 'Il était une fois dans  ...';

        this.zone.run(() => {
          //this.title = 'une lointaine galaxie';
        });
      }, 2500);
    });
  }
}
