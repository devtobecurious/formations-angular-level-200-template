import { Component } from '@angular/core';
import { ProfileService } from './features/player/services/profile.service';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';

  constructor(private service: ProfileService) {

  }
}
