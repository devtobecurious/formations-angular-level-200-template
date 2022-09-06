import { Component, OnInit } from '@angular/core';
import { GridOptionService } from '../grid-option.service';

@Component({
  selector: 'game-cell-grid-injection',
  templateUrl: './cell-grid-injection.component.html',
  styleUrls: ['./cell-grid-injection.component.css']
})
export class CellGridInjectionComponent implements OnInit {
  styleAAfficher = '';

  constructor(private readonly optionService: GridOptionService) { }

  ngOnInit(): void {
    this.styleAAfficher = this.optionService.style;
  }

}
