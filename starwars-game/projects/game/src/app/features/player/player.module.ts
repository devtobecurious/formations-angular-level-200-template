import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCreateModule, ProfilCreateComponent } from './profil-create/profil-create.component';
import { PlayerService } from './services/player.service';
import { GridModule } from '../../shared/components/grid/grid.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PlayerCreateModule
  ],
  providers: [
    // PlayerService
  ],
  exports: [
    ProfilCreateComponent
  ]
})
export class PlayerModule { }
