import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { TextboxLabelModule } from '../../shared/ui/textbox-label/textbox-label.component';
import { CombobocLabelComponent } from '../../shared/ui/comboboc-label/comboboc-label.component';



@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TextboxLabelModule,
    CombobocLabelComponent
  ]
})
export class ProfileDeuxModule { }
