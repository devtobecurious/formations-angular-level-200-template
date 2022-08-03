import { Component, OnInit } from '@angular/core';
import { Config } from '../models/config';
import { GridConfigService } from '../services/grid-config.service';

@Component({
  selector: 'game-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.css']
})
export class GridCellComponent implements OnInit {
  config: Config | undefined;

  constructor(private configService: GridConfigService) {
    this.config = this.configService.config;
  }

  ngOnInit(): void {
  }

}
