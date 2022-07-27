import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnemyListComponent } from './enemy-list/enemy-list.component';
import { EnemyRoutingModule } from './enemy-routing.module';



@NgModule({
  declarations: [
    EnemyListComponent
  ],
  imports: [
    CommonModule,
    EnemyRoutingModule
  ]
})
export class EnemyModule { }
