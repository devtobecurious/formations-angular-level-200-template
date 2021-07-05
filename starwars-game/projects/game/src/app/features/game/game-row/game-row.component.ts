import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GameDto } from '../../../core/models/game.dto';

@Component({
  selector: 'game-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameRowComponent implements OnInit {
  @Input() item!: GameDto;

  constructor() { }

  ngOnInit(): void {
  }

  get runChangeDetection() {
    console.warn('TodoComponent - Checking the view');
    return true;
  }
}
