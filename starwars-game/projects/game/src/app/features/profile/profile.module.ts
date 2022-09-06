import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormFieldBisComponent } from '../../shared/components/form-field-bis/form-field-bis.component';
import { ProfileListComponent } from './profile-list/profile-list.component';



@NgModule({
  declarations: [
    ProfileCreateComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormFieldBisComponent,
    ProfileListComponent
  ]
})
export class ProfileModule { }
