import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-my-combo-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-combo-box.component.html',
  styleUrls: ['./my-combo-box.component.css']
})
export class MyComboBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
