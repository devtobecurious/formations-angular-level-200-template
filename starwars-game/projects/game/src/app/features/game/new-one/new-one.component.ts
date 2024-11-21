import { Component, inject, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { GameDto } from '../../../core/models/game.dto';
import { addGameToStoreAction, endGameAction } from '../store/games.actions';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  private readonly store = inject(Store<ApplicationState>)
  tiles: Tile[] = [];

  constructor(private tileService: TileService) { }

  ngOnInit(): void {

  }

  start(): void {
    const game: GameDto = {
      id: Math.random() * 100,
      success: false,
      title: 'Youpi une nouvelle partie'
    }

    this.store.dispatch(addGameToStoreAction({ item: game }))

    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);

    setTimeout(() => {
      this.store.dispatch(endGameAction({ id: game.id }))
    }, 1000);
  }

}
