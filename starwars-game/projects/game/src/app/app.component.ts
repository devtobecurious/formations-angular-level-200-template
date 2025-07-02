import { Component } from '@angular/core';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'game';

  killAngular() {
    setTimeout(() => {
      console.info('coucou ??')
    }, 0);
  }
}
