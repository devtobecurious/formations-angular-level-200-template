import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameService } from './services/game.service';
import { BoolToTextPipe } from '../../shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from '../../shared/directives/bool-to-color.directive';
import { GameTableComponent } from './game-table/game-table.component';
import { GameRowComponent } from './game-row/game-row.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    GameListComponent,
    BoolToTextPipe,
    BoolToColorDirective,
    GameTableComponent,
    GameRowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    GameService
  ],
  exports: [
    GameListComponent
  ]
})
export class GameModule { }
