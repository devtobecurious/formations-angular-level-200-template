import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameService } from './services/game.service';



@NgModule({
  declarations: [
    GameListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GameService
  ],
  exports: [
    GameListComponent
  ]
})
export class GameModule { }
