import { Component, OnInit } from '@angular/core';
import { GridConfigService } from '../services/grid-config.service';

@Component({
  selector: 'game-in-cell',
  templateUrl: './in-cell.component.html',
  styleUrls: ['./in-cell.component.css']
})
export class InCellComponent implements OnInit {
  tailleH2 !: number;

  constructor(public config: GridConfigService) {
    console.info('1', this.config.tailleH2);
  }

  ngOnInit(): void {
    this.config.tailleH2.subscribe(item => this.tailleH2 = item);
  }

}
