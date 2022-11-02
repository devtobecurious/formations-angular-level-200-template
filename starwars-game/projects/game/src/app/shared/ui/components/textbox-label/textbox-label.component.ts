import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-textbox-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textbox-label.component.html',
  styleUrls: ['./textbox-label.component.css']
})
export class TextboxLabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
