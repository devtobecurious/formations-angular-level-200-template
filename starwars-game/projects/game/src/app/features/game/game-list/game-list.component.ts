import { Component, inject, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GetAllGameInfrastructure } from '../services/game.infrastructure';
import { FormsModule } from '@angular/forms';
import { GameTableComponent } from '../game-table/game-table.component';
import { SearchService } from 'search-lib';
import { AsyncPipe } from '@angular/common';
import { DisplayNumberPipe } from '../../../shared/tools/display-number.pipe';
import { GameBusiness } from '../services/game.business';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: true,
    imports: [FormsModule, GameTableComponent, AsyncPipe, DisplayNumberPipe],
    providers: [DisplayNumberPipe]
})
export class GameListComponent implements OnInit {
  private readonly number = inject(DisplayNumberPipe)
  private readonly gameService = inject(GetAllGameInfrastructure)
  // private readonly searchStore = inject(SearchService)

  // games$ = (inject(SearchService)).asObservable.pipe(
  //             switchMap(state => this.gameService.getAll(state.item, 10))
  //           )
  games$ = (inject(GameBusiness)).getAll()
  searchItem = ''

  ngOnInit(): void {
    const result = this.number.transform(1)
    const result2 = this.number.transform(1)
  }

  // compute(): number {
  //   // console.info('compute')

  //   return 1
  // }

}
