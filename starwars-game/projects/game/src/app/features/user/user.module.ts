import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormUserModule } from './form-user/form-user.component';
import { userRoutes } from './routes';



@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormUserModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
