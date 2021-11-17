import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component } from '@angular/core';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'game';

  displayH2() {
    console.info('je suis appelé');
  }
}
