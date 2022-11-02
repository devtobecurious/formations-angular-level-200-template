import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserRoutingModule } from './user-routing.module';
import { TextboxLabelComponent } from '../../shared/ui/components/textbox-label/textbox-label.component';



@NgModule({
  declarations: [
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TextboxLabelComponent
  ],
  exports: [
    //Attention: en es-tu vraiment sur ??
  ]
})
export class UserModule { }
