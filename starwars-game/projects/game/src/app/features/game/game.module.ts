import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameService } from './services/game.service';
import { BoolToTextPipe } from '../../shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from '../../shared/directives/bool-to-color.directive';
import { GameTableComponent } from './components/game-table/game-table.component';
import { GameRowComponent } from './components/game-row/game-row.component';
import { FormsModule } from '@angular/forms';
import { GridModule } from '../../shared/components/grid/grid.module';
import { NewOneComponent } from './components/new-one/new-one.component';



@NgModule({
  declarations: [
    GameListComponent,
    BoolToTextPipe,
    BoolToColorDirective,
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
