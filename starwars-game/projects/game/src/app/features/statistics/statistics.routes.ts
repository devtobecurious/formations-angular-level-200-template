import { Routes } from "@angular/router";
import { ListStatisticsComponent } from "./components/list-statistics/list-statistics.component";
import { AddStatisticComponent } from "./components/add-statistic/add-statistic.component";

export const statisticRoutes: Routes = [
  {
    path: '',
    component: ListStatisticsComponent
  },
  {
    path: 'add',
    component: AddStatisticComponent
  }
]
