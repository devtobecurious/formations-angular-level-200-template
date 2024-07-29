import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GameDto } from '../../../core/models/game.dto';
import { GameRowComponent } from '../game-row/game-row.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'game-table',
    templateUrl: './game-table.component.html',
    styleUrls: ['./game-table.component.css'],
    standalone: true,
    imports: [NgFor, GameRowComponent],
})
export class GameTableComponent implements OnInit {
  @Input() games: GameDto[] = [];

  constructor() { }

  ngOnInit(): void {
  }



}
