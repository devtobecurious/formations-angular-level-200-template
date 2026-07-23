import { Routes } from "@angular/router";
import { DisplayAllStatsComponent } from "./components/display-all-stats/display-all-stats.component";

// route parente /stats/
export const statsRoutes: Routes = [
    {
        path: '',
        component: DisplayAllStatsComponent,
    }
]