import { Component } from '@angular/core';
import { ComboGameComponent } from '../combo-game/combo-game.component';

@Component({
  selector: 'game-update-game',
  standalone: true,
  imports: [ComboGameComponent],
  templateUrl: './update-game.component.html',
  styleUrl: './update-game.component.css'
})
export class UpdateGameComponent {

}
