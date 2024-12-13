import { Component, inject, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { GameDto } from '../../../core/models/game.dto';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { addNewGameAction } from '../store/games.actions';

@Component({
    selector: 'game-new-one',
    templateUrl: './new-one.component.html',
    styleUrls: ['./new-one.component.css'],
    standalone: false
})
export class NewOneComponent implements OnInit {
  private readonly store = inject(Store<ApplicationState>)
  tiles: Tile[] = [];

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

  startGame(): void {
    const game: GameDto = {
      id: 0,
      success: false,
      title: 'super partie'
    }
    this.store.dispatch(addNewGameAction({ item: game }))
  }

}
