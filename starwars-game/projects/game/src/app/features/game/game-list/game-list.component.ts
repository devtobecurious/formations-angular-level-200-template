import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchBusService } from '../../../shared/components/search/services/search-bus.service';
import { GameBusiness } from '../services/game.business';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent { // implements OnInit {
  //private searchStore = inject(SearchBusService);
  private business = inject(GameBusiness);
  games$ = this.business.getAll();
  // games: GameDto[] = [];
  searchItem = '';

  //constructor(private gameService: GameService) { }

  // ngOnInit(): void {
    // la ça repart sur de l'async
    //this.searchStore.asObservable.subscribe(item => console.info(item));

    // ici on est sync

    // la ça repart sur de l'async
    // this.gameService.getAll(3).subscribe(items => this.games = items);
  // }

}
