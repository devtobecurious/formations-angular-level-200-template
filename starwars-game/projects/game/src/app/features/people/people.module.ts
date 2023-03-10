import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { PagePeopleComponent } from './pages/page-people/page-people.component';
import { ListPeopleComponent } from './list-people/list-people.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    PagePeopleComponent
  ]
})
export class PeopleModule { }
