import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { TextBoxModule } from '../../shared/ui/components/text-box/mon-text-box/mon-text-box.component';
import { LabelCustomComponent } from '../../shared/ui/components/label-custom/label-custom.component';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    TextBoxModule,
    LabelCustomComponent,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
