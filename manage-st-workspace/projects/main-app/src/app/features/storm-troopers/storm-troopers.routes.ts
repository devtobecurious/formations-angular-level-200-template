import { Routes } from "@angular/router";
import { DisplayStormTroopers } from "./components/display-storm-troopers/display-storm-troopers";

// http://localhost:4201/storm-troopers/...
export const stormTroopersRoutes: Routes = [
    {
        path: '',
        component: DisplayStormTroopers
    }
]