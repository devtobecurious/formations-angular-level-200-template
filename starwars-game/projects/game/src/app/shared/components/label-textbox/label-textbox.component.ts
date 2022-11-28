import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'game-label-textbox',
  templateUrl: './label-textbox.component.html',
  styleUrls: ['./label-textbox.component.css']
})
export class LabelTextboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


@NgModule({
  declarations: [LabelTextboxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LabelTextboxComponent
  ]
})
export class LabelTextboxModule { }
