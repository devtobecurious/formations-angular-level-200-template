import { Component } from '@angular/core';
import { LoggerService } from './shared/services/logger.service';
import { PlayerComponent } from 'playerLib';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';

  constructor(private readonly logger: LoggerService) {
    this.logger.log('AppComponent', this);
  }
}
