import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop'
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStore } from 'my-search';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent implements OnInit {
  private readonly searchStore = inject(SearchStore)
  private query = this.searchStore.asValue
  private itemsSignal = toSignal(this.gameService.getAll(3)) // take(1)
  games = computed(() => this.itemsSignal()?.filter(item => item.title.startsWith(this.query() ?? '')))

  // rapide demo sur construction appel api et query

  updateDomByQuery = effect(() => {
      const queryResult = this.query()
      document.getElementById('btn')!.textContent = queryResult!
  })

  // games: GameDto[] = []; // statefull
  searchItem = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // this.searchStore.asObservable.subscribe((search) => {
    //   console.info(search)
    // });


   // this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
