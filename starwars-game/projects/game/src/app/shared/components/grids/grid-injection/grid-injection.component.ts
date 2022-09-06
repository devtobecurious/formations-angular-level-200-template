import { Component, Input, OnInit } from '@angular/core';
import { GridOptionService } from '../grid-option.service';

@Component({
  selector: 'game-grid-injection',
  templateUrl: './grid-injection.component.html',
  styleUrls: ['./grid-injection.component.css'],
  providers: [
    GridOptionService
  ]
})
export class GridInjectionComponent implements OnInit {
  @Input() style = '';

  constructor(private readonly optionService: GridOptionService) {

  }

  ngOnInit(): void {
    this.optionService.style = this.style;
  }

}
