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
import { RouterModule, Routes } from '@angular/router';

const routes: Routes= [
    {
  path: '',
  component: GameListComponent
},
{
  path: 'new',
  component: NewOneComponent
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }

@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    GameRoutingModule,
    GameListComponent,
    BoolToTextPipe,
    BoolToColorDirective,
    GameTableComponent,
    GameRowComponent,
    NewOneComponent
],
    providers: [
        GameService
    ],
    exports: [
        GameListComponent
    ]
})
export class GameModule { }


