import { Component, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { GameContainerForProp, addGameAction } from '../store/actions';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  tiles: Tile[] = [];

  constructor(private tileService: TileService,
              private readonly store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

  startGame(): void {
    const newGame: GameContainerForProp = {
      item: {
        id: 0,
        success: false,
        title: new Date().toString()
      }
    };
    this.store.dispatch(addGameAction(newGame));
  }

}
