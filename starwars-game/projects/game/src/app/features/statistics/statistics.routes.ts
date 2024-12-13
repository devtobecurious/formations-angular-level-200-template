import { Routes } from "@angular/router";
import { ListStatisticsComponent } from "./components/list-statistics/list-statistics.component";

// http://domain/statistics/{...}
export const statisticsRoutes: Routes = [
  {
    path: '',
    component: ListStatisticsComponent
  }
]
