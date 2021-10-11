import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ListProfileModule } from '../user-test/list-profile/list-profile.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [
    CommonModule,
    ListProfileModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateProfileComponent
  ]
})
export class UserModule { }
