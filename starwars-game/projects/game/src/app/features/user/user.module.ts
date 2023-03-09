import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormUserModule } from './form-user/form-user.component';



@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormUserModule
  ]
})
export class UserModule { }
