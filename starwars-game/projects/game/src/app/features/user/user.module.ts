import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserRoutingModule } from './user-routing.module';
import { TextAndLabelModule } from '../../shared/ui/components/text-and-label/text-and-label.component';
import { MyComboBoxComponent } from '../../shared/ui/components/my-combo-box/my-combo-box.component';



@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TextAndLabelModule,
    MyComboBoxComponent
  ]
})
export class UserModule { }
