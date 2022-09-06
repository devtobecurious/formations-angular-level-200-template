import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModule } from './game/game.module';
import { ProfileModule } from './profile/profile.module';
import { LoggerService } from '../shared/services/logger.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameModule,
    ProfileModule
  ],
  exports: [],
  providers: [
    LoggerService
  ]
})
export class FeaturesModule { }
