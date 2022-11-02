import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsListComponent } from './stats-list/stats-list.component';
import { StatsRoutingModule } from './stats-routing.module';



@NgModule({
  declarations: [
    StatsListComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule
  ]
})
export class StatsModule { }
