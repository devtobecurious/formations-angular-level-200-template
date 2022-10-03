import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'game-label-custom',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './label-custom.component.html',
  styleUrls: ['./label-custom.component.css']
})
export class LabelCustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
