import { Component } from '@angular/core';
import { TestService } from './shared/services/test.service';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';

  /**
   *
   */
  constructor(private test: TestService) {

  }
}
