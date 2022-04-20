import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProfileComponent, CreateProfileModule } from './create-profile/create-profile.component';
import { PlayerService } from './services/player.service';



@NgModule({
  declarations: [
    //CreateProfileComponent
  ],
  imports: [
    CommonModule,
    CreateProfileModule
  ],
  exports: [
    //CreateProfileComponent
  ],
  providers: [
    //PlayerService
  ]
})
export class PlayerModule { }
