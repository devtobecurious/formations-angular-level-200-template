import { Component } from '@angular/core';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'game';

  getSubTitle(item: string): string {

    console.info('getSubTitle called');
    return 'A simple game built with Angular' + item;
  }
}
