import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list/table-list.component';
import { ListStatComponent } from './list-stat/list-stat.component';
import { StatRoutingModule } from './stat-routing.module';

@NgModule({
  declarations: [
    ListStatComponent
  ],
  imports: [
    CommonModule,
    StatRoutingModule,
    TableListComponent
  ]
})
export class StatModule { }
