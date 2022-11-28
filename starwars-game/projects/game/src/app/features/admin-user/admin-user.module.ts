import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { AdminUserRoutingModule } from './admin-user-routing.module';
import { ListProfileComponent } from './list-profile/list-profile.component';



@NgModule({
  declarations: [
    CreateProfileComponent,
    ListProfileComponent
  ],
  imports: [
    CommonModule,
    AdminUserRoutingModule
  ]
})
export class AdminUserModule { }
