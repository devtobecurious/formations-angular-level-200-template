import { Component, inject, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { addNewGameAction, addNewGameFromUIAction } from '../../../reducers/games.actions';

@Component({
    selector: 'game-new-one',
    templateUrl: './new-one.component.html',
    styleUrls: ['./new-one.component.css'],
    standalone: false
})
export class NewOneComponent implements OnInit {
  tiles: Tile[] = [];
  private readonly store = inject(Store<ApplicationState>)

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

  addNewGame(): void {
    // this.store.dispatch(addNewGameAction())
    this.store.dispatch(addNewGameFromUIAction({
      item: {
        success: true,
        title: 'Abe'
      }
    }))
  }
}
