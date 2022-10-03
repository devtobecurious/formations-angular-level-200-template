import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'game-mon-text-box',
  templateUrl: './mon-text-box.component.html',
  styleUrls: ['./mon-text-box.component.css']
})
export class MonTextBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

//--------------

@NgModule({
  declarations: [
    MonTextBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MonTextBoxComponent
  ]
})
export class TextBoxModule { }
