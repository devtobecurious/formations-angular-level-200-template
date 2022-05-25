import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameService } from './services/game.service';
import { BoolToTextPipe } from '../../shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from '../../shared/directives/bool-to-color.directive';
import { GameTableComponent } from './game-table/game-table.component';
import { GameRowComponent } from './game-row/game-row.component';
import { FormsModule } from '@angular/forms';
import { NewOneComponent } from './new-one/new-one.component';
import { GridModule } from '../../shared/components/grid/grid.module';
import { ObservablesComponent } from '../../shared/components/observables/observables.component';
import { GridCustomComponent } from '../../shared/ui/components/grid-custom/grid-custom.component';
import { RowCustomComponent } from '../../shared/ui/components/grid-custom/row-custom/row-custom.component';



@NgModule({
  declarations: [
    GameListComponent,
    BoolToTextPipe,
    BoolToColorDirective,
    GameTableComponent,
    GameRowComponent,
    NewOneComponent,
    ObservablesComponent,
    GridCustomComponent,
    RowCustomComponent
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
    GameListComponent,
    NewOneComponent
  ]
})
export class GameModule { }
