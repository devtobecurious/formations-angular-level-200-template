import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { selectAllGames, selectAllSuccessGames } from '../store/games.selectors';
import { setAllSpeciesAction } from '../store/species.actions';
import { Specie } from '../models/species';
import { toSignal } from '@angular/core/rxjs-interop';
import { getAllSpeciesNotEmpty } from '../store/species.selectors';
import { SpeciesInfrastructure } from '../services/species.services';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private readonly speciesInfra = inject(SpeciesInfrastructure)
  private readonly store = inject(Store<ApplicationState>)
  species$$ = toSignal(this.store.select(getAllSpeciesNotEmpty))
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    //this.gameService.getAll(3).subscribe(items => this.games = items);
    // this.store.pipe(
    // select(selectAllGames),
    // ).subscribe(items => this.games = items)

    this.store.select(selectAllSuccessGames)
              .subscribe(items => this.games = items)


  }

  loadSpecies(): void {
    // const specie: Specie = {
    //   label: 'Wookiee'
    // }
    // this.store.dispatch(setAllSpeciesAction({ items: [specie] }))
    this.speciesInfra.getAll().subscribe({
      next: items => this.store.dispatch(setAllSpeciesAction({ items }))
    })
  }
}
