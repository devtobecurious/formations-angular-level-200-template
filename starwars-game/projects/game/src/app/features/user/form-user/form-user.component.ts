import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'game-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
}

@NgModule({
  declarations: [
    FormUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormUserComponent
  ]
})
export class FormUserModule { }
