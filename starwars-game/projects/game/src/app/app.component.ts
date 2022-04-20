import { Component } from '@angular/core';
import { PlayerService } from './features/player/services/player.service';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';

  constructor(private service: PlayerService) { }
}
