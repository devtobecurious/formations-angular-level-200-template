import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchBusService } from '../../../shared/components/search/services/search-bus.service';
import { GameBusiness } from '../services/game.business';
import  {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import { LoggerService } from '../../../shared/tools/logging';

function createGameBusiness(monParam: unknown): { business: GameBusiness, log: LoggerService} {
  return {
    business: inject(GameBusiness),
    log: inject(LoggerService)
  }
}

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent { // implements OnInit {
  //private searchStore = inject(SearchBusService);
  private business = createGameBusiness(1).business;
  games$ = this.business.getAll().pipe(takeUntilDestroyed());
  // games: GameDto[] = [];
  searchItem = '';

  //constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games$.pipe(

    ).subscribe(items => {
      // On peut le faire autrement ?
    })
    // this.business = inject(GameBusiness); à ne pas faire
  }
    // la ça repart sur de l'async
    //this.searchStore.asObservable.subscribe(item => console.info(item));

    // ici on est sync

    // la ça repart sur de l'async
    // this.gameService.getAll(3).subscribe(items => this.games = items);
  // }

}
