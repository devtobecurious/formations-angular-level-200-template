import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'game-textbox-label',
  templateUrl: './textbox-label.component.html',
  styleUrls: ['./textbox-label.component.css']
})
export class TextboxLabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    TextboxLabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextboxLabelComponent
  ]
})
export class TextboxLabelModule { }
