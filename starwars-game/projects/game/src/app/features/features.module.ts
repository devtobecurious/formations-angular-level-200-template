import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModule } from './game/game.module';
import { ProfileModule } from './profile/profile.module';
import { LoggerService } from '../shared/services/logger.service';
import { TopdownModule } from './topdown/topdown.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameModule,
    ProfileModule,
    TopdownModule
  ],
  exports: [],
  providers: [
    LoggerService
  ]
})
export class FeaturesModule { }
