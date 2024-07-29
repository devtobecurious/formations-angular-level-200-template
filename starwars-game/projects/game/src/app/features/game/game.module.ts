import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GetAllGameInfrastructure } from './services/game.service';
import { BoolToTextPipe } from '../../shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from '../../shared/directives/bool-to-color.directive';
import { GameTableComponent } from './game-table/game-table.component';
import { GameRowComponent } from './game-row/game-row.component';
import { FormsModule } from '@angular/forms';
import { GridModule } from '../../shared/components/grid/grid.module';
import { NewOneComponent } from './new-one/new-one.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        GridModule,
        GameListComponent,
        BoolToTextPipe,
        BoolToColorDirective,
        GameTableComponent,
        GameRowComponent,
        NewOneComponent
    ],
    providers: [
        GetAllGameInfrastructure
    ],
    exports: [
        GameListComponent
    ]
})
export class GameModule { }
