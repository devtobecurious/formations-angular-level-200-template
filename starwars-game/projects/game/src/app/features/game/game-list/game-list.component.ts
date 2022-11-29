import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GameDto } from '../../../core/models/game.dto';
import { SearchService } from '../../../shared/ui/search/services';
import { GameBusinessService } from '../services/game-business.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {
  // 1° et la 2°: games: GameDto[] = [];
  games$ !: Observable<GameDto[]>;
  searchItem = '';
  // 1°
  // private subscription = new Subscription();
  // 2°
  // private toKill = new Subject<boolean>();

  // Avant refacto
  // constructor(private gameService: GameService,
  //             private searchService: SearchService) { }
  constructor(private business: GameBusinessService) {}

  ngOnDestroy(): void {
    // premiere technique
    // this.subscription.unsubscribe();

    // deuxieme technique
    //this.toKill.next(true);
    // this.toKill.unsubscribe();
  }

  ngOnInit(): void {
    // 1°
    // const sub = this.business.search().subscribe(items => this.games = items);
    // this.subscription.add(sub);

    // 2°
    this.games$ = this.business.search();
    // .pipe(
    //   takeUntil(this.toKill) //2°:  continue d'émetteur tant que le subject toKill n'émet rien
    // )
    // 1° et 2 ° .subscribe(items => this.games = items);

  }

}
