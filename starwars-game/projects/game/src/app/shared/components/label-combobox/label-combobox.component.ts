import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-label-combobox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-combobox.component.html',
  styleUrls: ['./label-combobox.component.css']
})
export class LabelComboboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
