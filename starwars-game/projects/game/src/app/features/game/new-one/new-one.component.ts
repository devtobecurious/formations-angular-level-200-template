import { Component, inject, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { addNewGameAction, WithGame } from '../store/games.actions';

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
    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

  start(): void {
    const withGame: WithGame = {
      item: {
        id: 0,
        success: true,
        title: `Test ${new Date().getTime()}`
      }
    }
    this.store.dispatch(addNewGameAction(withGame))
  }
}
