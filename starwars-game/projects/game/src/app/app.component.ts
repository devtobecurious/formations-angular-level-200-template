import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { ServiceUnService } from './shared/services/service-un.service';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'game';

  constructor(private service: ServiceUnService) {}

  displayH2() {
    console.info('je suis appelé');
  }
}
