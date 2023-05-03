import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ListPlanetComponent } from '../list-planet/list-planet.component';

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
    CommonModule,
    ListPlanetComponent
  ],
  exports: [
    FormUserComponent
  ]
})
export class FormUserModule { }
