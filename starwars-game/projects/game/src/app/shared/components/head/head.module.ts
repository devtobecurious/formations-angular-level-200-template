import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head.component';
import { ServiceUnService } from '../../services/service-un.service';
import { ChildOneComponent } from './child-one/child-one.component';



@NgModule({
  declarations: [
    HeadComponent,
    ChildOneComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ServiceUnService
  ],
  exports: [
    HeadComponent
  ]
})
export class HeadModule { }
