import { Routes } from "@angular/router";
import { CreateProfileComponent } from "./components/create-profile/create-profile.component";

export const profileRoutes: Routes = [
  {
    path: 'create',
    component: CreateProfileComponent
  }
]
