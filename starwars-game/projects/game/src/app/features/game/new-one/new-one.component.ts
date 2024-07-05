import { Component, inject, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { GridComponent } from '../../../shared/components/grid/grid.component';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { GameDto } from '../../../core/models/game.dto';
import { addNewGameAction } from '../store/games.actions';

@Component({
    selector: 'game-new-one',
    templateUrl: './new-one.component.html',
    styleUrls: ['./new-one.component.css'],
    standalone: true,
    imports: [GridComponent]
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
    const newGame: GameDto = {
      id:0,
      success: false,
      title: (new Date()).toLocaleString()
    }
    this.store.dispatch(addNewGameAction({ item: newGame }));
  }

}
