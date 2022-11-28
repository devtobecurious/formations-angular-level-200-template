import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { AdminUserRoutingModule } from './admin-user-routing.module';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { LabelTextboxModule } from '../../shared/components/label-textbox/label-textbox.component';
import { LabelComboboxComponent } from '../../shared/components/label-combobox/label-combobox.component';
import { ProfileService } from './services/profile.service';



@NgModule({
  declarations: [
    CreateProfileComponent,
    ListProfileComponent
  ],
  imports: [
    CommonModule,
    AdminUserRoutingModule,
    LabelTextboxModule,
    LabelComboboxComponent
  ],
  providers: [
   //  ProfileService, on le fait le moins possible
  ]
})
export class AdminUserModule { }
