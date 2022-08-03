import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { InputTextModule } from '../../shared/ui/components/input-text/input-text.component';
import { InputTextDeuxComponent } from '../../shared/ui/components/input-text-deux/input-text-deux.component';
import { RouterModule } from '@angular/router';
import { GameService } from '../game/services/game.service';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextDeuxComponent,
    RouterModule.forChild([ { path: 'profile', component: ProfileComponent } ])
  ],
  exports: [
    ProfileComponent
  ],
  // providers: [
  //   GameService
  // ]
})
export class UserModule { }
