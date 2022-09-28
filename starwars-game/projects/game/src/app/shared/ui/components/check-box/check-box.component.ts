import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-check-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
