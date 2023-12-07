import { Routes } from "@angular/router";
import { ListStatisticsComponent } from "./components/list-statistics/list-statistics.component";

export const statisticsRoutes: Routes = [
  {
    path: '',
    component: ListStatisticsComponent
  },
  // {
  //   path: 'add',
  //   component: AddStatisticsComponent
  // }
];
