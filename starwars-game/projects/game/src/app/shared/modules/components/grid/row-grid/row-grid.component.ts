import { Component, OnInit } from '@angular/core';
import { GridService } from '../grid.service';

@Component({
  selector: 'gameSW-row-grid',
  templateUrl: './row-grid.component.html',
  styleUrls: ['./row-grid.component.css']
})
export class RowGridComponent implements OnInit {
  rowWidth: number;

  constructor(private service: GridService) {
    this.rowWidth = this.service.conf.width;
  }

  ngOnInit(): void {
  }

}
