import { Component, inject, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { SearchService } from 'search';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private readonly searchService = inject(SearchService)
  private readonly gameService  = inject(GameService)

  games$ = this.searchService.asObservable().pipe(
      switchMap(searchResult => this.gameService.getAll(searchResult.value, 3))
  );

  //games: GameDto[] = [];
  searchItem = '';

  // ETAPE 01
  // constructor(private gameService: GameService) { }

  ngOnInit(): void {
    const parent$ = this.searchService.asObservable();
    //const enfant$ = this.gameService.getAll('', 3)

    // ETAPE 01 de la refacto
    // const resultatRecherche$ = parent$.pipe(
    //   switchMap(searchResult => this.gameService.getAll(searchResult.value, 3))
    // )

    // resultatRecherche$.subscribe({
    //   next: items => this.games = items
    // })


    // this.searchService.asObservable().subscribe(item => {
    //   console.info(item.value);
    // })

    // this.gameService.getAll('', 3).subscribe(items => this.games = items);
  }

}
