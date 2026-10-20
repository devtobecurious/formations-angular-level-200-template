import { Routes } from "@angular/router";
import { DisplayPeople } from "./components/display-people/display-people";
import { GetAllPeople } from "./services/get-all-people";
import { GetAllPeopleBusiness } from "./services/get-all-people.business";

const peopleRoutes: Routes = [
  {
    path: '',
    component: DisplayPeople,
    providers: [
      GetAllPeople,
      GetAllPeopleBusiness
    ]
  }
]

export default peopleRoutes
