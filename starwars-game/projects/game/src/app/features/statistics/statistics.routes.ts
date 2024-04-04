import { Routes } from "@angular/router";
import { ListStatisticsComponent } from "./components/list-statistics/list-statistics.component";

// on est déjà dans le chemin http://...../statistics/
export const statisticsRoutes: Routes = [
  {
    path: '',
    component: ListStatisticsComponent
  },
  // {
  //   path: 'create',
  //   component: ListStatisticsComponent
  // }
]
