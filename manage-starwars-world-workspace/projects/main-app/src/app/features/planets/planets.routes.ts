import { Routes } from "@angular/router";
import { DisplayAllPlanets } from "./components/display-all-planets/display-all-planets";
import { AllPlanetsPage } from "./pages/all-planets.page/all-planets.page";

const planetsRoutes: Routes = [
  {path: '',
    component: AllPlanetsPage
  }
]

export default planetsRoutes;
