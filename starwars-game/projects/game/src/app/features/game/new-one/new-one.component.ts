import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GameDto } from '../../../core/models/game.dto';
import { ApplicationState } from '../../../reducers';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { addNouvellePartieRequest, addPartieCreeParUserRequest } from '../store/actions';
import { partiesEchoueesQuery, toutesLesPartiesQuery } from '../store/selectors';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  tiles: Tile[] = [];
  allGames$ !: Observable<GameDto[]>;
  game: GameDto = {
    id: (Math.random() * 10),
    success: false,
    title: ''
  };

  constructor(private tileService: TileService,
              private readonly store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);

    //this.store.subscribe(item => console.info('ya une mise à jour', item));
    this.allGames$ = this.store.pipe(
      tap(state => console.info(state.games.items)),
      select(partiesEchoueesQuery));
  }

  start(): void {
    this.store.dispatch(addNouvellePartieRequest());
  }

  startBis(): void {
    this.store.dispatch(addPartieCreeParUserRequest({
      game: this.game
    }));
    this.game = { id: 1, title: '', success: false };
  }

}
