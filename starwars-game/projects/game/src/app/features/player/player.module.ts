import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { PlayerListModule } from './player-list/player-list.component';
import { PlayerService } from './services/player.service';



@NgModule({
  declarations: [
    ProfileCreateComponent
  ],
  imports: [
    CommonModule,
    PlayerListModule
  ],
  providers: [
    PlayerService
  ]
})
export class PlayerModule { }
