import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GridModule } from '../../shared/components/grid/grid.module';
import { BoolToColorDirective } from '../../shared/directives/bool-to-color.directive';
import { BoolToTextPipe } from '../../shared/pipes/bool-to-text.pipe';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameRowComponent } from './components/game-row/game-row.component';
import { GameTableComponent } from './components/game-table/game-table.component';
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
    // { provide: 'BASE_URL', useValue: 'https://localhost:44379/api'}
  ],
  exports: [
    GameListComponent
  ]
})
export class GameModule { }
