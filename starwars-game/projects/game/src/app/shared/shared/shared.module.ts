import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    /*
      Tous les modules qu'on CROIT utilisés dans l'application

    */
  ]
})
export class SharedModule { } // A ne JAMAIS faire => mieux vaut plein de petits modules
