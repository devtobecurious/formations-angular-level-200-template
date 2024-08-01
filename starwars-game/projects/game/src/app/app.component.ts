import { Component } from '@angular/core';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';

  down(): void {
    // setTimeout(() => {
    // }, 0);
    console.info('down')
  }
}
