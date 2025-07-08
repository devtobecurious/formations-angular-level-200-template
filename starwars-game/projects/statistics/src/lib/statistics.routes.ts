import { Routes } from "@angular/router";
import { ListStatsComponent } from "./components/list-stats/list-stats.component";
import { GetListStatsService } from "./services/get-list-stats.service";

export const statisticsRoutes: Routes = [
  {
    path: '',
    component: ListStatsComponent,
    providers: [GetListStatsService]
  }
]
