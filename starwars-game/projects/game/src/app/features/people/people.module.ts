import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListModule } from './people-list/people-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PeopleListModule
  ],
  exports: [
    PeopleListModule
  ]
})
export class PeopleModule { }
