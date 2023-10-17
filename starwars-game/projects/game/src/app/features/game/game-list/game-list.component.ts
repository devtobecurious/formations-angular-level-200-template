import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchbisStateService } from '../../../shared/ui/search-bis/searchbis-state.service';
import { HttpClient } from '@angular/common/http';
import { GameBusiness } from '../services/game.business';

// tant que environnement de construction (field ou constructor)
function getSearchService() {
  const httpCLient = inject(HttpClient);
  return inject(SearchbisStateService);
}

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  animations: []
})
export class GameListComponent {
  // games: GameDto[] = [];
  // searchItem = '';
  // searchStateService = inject(SearchbisStateService);

  gameList$ = inject(GameBusiness).getAll();

}
