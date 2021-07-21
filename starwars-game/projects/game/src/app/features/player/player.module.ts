import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/profile.service';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileComponent
  ],
  providers: [
    ProfileService
  ]
})
export class PlayerModule { }
