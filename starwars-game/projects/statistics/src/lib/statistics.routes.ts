import { Routes } from "@angular/router";
import { StatisticsComponent } from "./statistics.component";

export const statisticsRoutes: Routes = [
  {
    path: '', // https://domain.com/statistics/...
    component: StatisticsComponent
  },

  // {
  //   path: 'create', // https://domain.com/statistics/...
  //   component: CreateStatisticComponent
  // },
]
