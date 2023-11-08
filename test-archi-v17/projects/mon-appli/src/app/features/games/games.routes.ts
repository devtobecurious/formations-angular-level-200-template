import { Routes } from "@angular/router";
import { ListGameComponent } from "./list-game/list-game.component";

export const lazyGamesRoutes: Routes = [
  {
    path: '',
    component: ListGameComponent
  }
]
