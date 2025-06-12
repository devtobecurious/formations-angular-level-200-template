import { Component, inject, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, Observable, switchMap, tap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchService } from 'search';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent implements OnInit {
  private readonly searchService = inject(SearchService)
  games: GameDto[] = [];
  searchItem = '';

  games$ = this.searchService.asObservable.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(state => state.item.value.length >= 3),
    switchMap(searchState => this.gameService.getAll(3, searchState.item.value)),
    //catchError()
  )

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    //this.searchService.asObservable.subscribe(item => console.info(item))

    // this.searchService.asObservable.subscribe({
    //   next: item => console.info(item)
    // })

    // this.searchService.asObservable.subscribe({
    //   next: console.info
    // })

    // const parent$ =  this.searchService.asObservable

    // parent$.pipe(
    //   tap(item => console.info('===> avant debounce')),
    //   debounceTime(200),
    //   tap(item => console.info('===> apres debounce')),

    //   distinctUntilChanged(),
    //   filter(state => state.item.value.length >= 3),
    //   switchMap(searchState => this.gameService.getAll(3, searchState.item.value))
    // )
    // .subscribe(items => this.games = items);

  }

}
