import { Routes } from "@angular/router";
import { CreateUserComponent } from "../create-user/create-user.component";

export const userRoutes: Routes = [
  {
    path: '',
    component: CreateUserComponent
  },
  {
    path: 'create',
    component: CreateUserComponent,
    children: [

    ],
  }
]
