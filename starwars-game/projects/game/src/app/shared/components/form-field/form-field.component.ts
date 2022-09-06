import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'game-mon-input',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}


@NgModule({
  declarations: [
    FormFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormFieldComponent
  ]
})
export class FormFieldModule { }
