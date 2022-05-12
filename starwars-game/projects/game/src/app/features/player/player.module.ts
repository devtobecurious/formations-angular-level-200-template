import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProfileComponent, CreateProfileModule } from './create-profile/create-profile.component';
import { PlayerService } from './services/player.service';
import { PlayerRoutingModule } from './player-routing.module';



@NgModule({
  declarations: [
    //CreateProfileComponent
  ],
  imports: [
    CommonModule,
    CreateProfileModule,
    PlayerRoutingModule
  ],
  exports: [
    //CreateProfileComponent
  ],
  providers: [
    //PlayerService
  ]
})
export class PlayerModule { }
