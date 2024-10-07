import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GameDto } from '../../../core/models/game.dto';
import { BoolToColorDirective } from '../../../shared/directives/bool-to-color.directive';
import { BoolToTextPipe } from '../../../shared/pipes/bool-to-text.pipe';

@Component({
    selector: 'game-game-row',
    templateUrl: './game-row.component.html',
    styleUrls: ['./game-row.component.css'],
    standalone: true,
    imports: [BoolToColorDirective, BoolToTextPipe],
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
