import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'game-text-and-label',
  templateUrl: './text-and-label.component.html',
  styleUrls: ['./text-and-label.component.css']
})
export class TextAndLabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [TextAndLabelComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TextAndLabelComponent
  ]
})
export class TextAndLabelModule { }
