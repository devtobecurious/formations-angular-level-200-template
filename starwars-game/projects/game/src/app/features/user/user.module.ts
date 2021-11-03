import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileService } from './services/profile.service';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProfileService
  ]
})
export class UserModule { }
