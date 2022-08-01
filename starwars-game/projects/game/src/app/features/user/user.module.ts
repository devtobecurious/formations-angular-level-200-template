import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { InputTextModule } from '../../shared/ui/components/input-text/input-text.component';
import { InputTextDeuxComponent } from '../../shared/ui/components/input-text-deux/input-text-deux.component';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextDeuxComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
