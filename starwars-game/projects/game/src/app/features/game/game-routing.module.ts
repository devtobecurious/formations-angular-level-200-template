import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewOneComponent } from "./new-one/new-one.component";
import { GameListComponent } from "./game-list/game-list.component";

const routes: Routes = [
  {
  path: '',
  component: GameListComponent
},
{
  path: 'new',
  component: NewOneComponent
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
