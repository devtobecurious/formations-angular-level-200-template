import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameService } from './services/game.service';
import { BoolToTextPipe } from '../../shared/pipes/bool-to-text.pipe';
import { GameTableComponent } from './game-table/game-table.component';
import { GameRowComponent } from './game-row/game-row.component';
import { FormsModule } from '@angular/forms';
import { NewOneComponent } from './new-one/new-one.component';
import { GridModule } from '../../shared/components/grid/grid.module';



@NgModule({
  declarations: [
    GameListComponent,
    BoolToTextPipe,
    GameTableComponent,
    GameRowComponent,
    NewOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule
  ],
  providers: [
    GameService
  ],
  exports: [
    GameListComponent
  ]
})
export class GameModule { }
