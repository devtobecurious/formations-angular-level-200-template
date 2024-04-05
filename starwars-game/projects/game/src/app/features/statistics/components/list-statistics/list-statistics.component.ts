import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GameService } from '../../../game/services/game.service';
import { StatisticsApplication } from '../../services/statistics.application';

@Component({
  selector: 'game-list-statistics',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './list-statistics.component.html',
  styleUrl: './list-statistics.component.css',
  providers: [
    GameService
  ]
})
export class ListStatisticsComponent {
  stats$ = inject(StatisticsApplication).getAll();
}
