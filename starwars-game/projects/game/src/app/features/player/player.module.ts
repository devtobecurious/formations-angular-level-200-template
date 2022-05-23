import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCreateModule, ProfilCreateComponent } from './profil-create/profil-create.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PlayerCreateModule
  ],
  exports: [
    ProfilCreateComponent
  ]
})
export class PlayerModule { }
