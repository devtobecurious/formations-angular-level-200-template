import { Component, ViewEncapsulation } from '@angular/core';
import { Config } from './shared/ui/components/container/models/config';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';

  config1: Config = {
    headerSize: 25
  };

  config2: Config = {
    headerSize: 30
  };
}
