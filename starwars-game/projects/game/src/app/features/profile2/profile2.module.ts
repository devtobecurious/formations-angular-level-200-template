import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../player/services/profile.service';
import { Profile2Component } from './profile2/profile2.component';



@NgModule({
  declarations: [
    Profile2Component
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProfileService
  ],
  exports: [
    Profile2Component
  ]
})
export class Profile2Module { }
