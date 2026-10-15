import { Routes } from "@angular/router";
import { DisplayPlanets } from "./components/display-planets/display-planets";
import { AddPlanet } from "./components/add-planet/add-planet";

const planetRoutes: Routes = [
    {
        path: '',
        component: DisplayPlanets
    },
    {
        path: 'add',
        component: AddPlanet
    }
]

export default planetRoutes;