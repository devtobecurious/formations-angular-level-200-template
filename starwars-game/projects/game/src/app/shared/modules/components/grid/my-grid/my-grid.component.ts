import { Component, Input, OnInit } from '@angular/core';
import { GridService } from '../grid.service';

@Component({
  selector: 'gameSW-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css'],
  providers: [
    GridService
  ]
})
export class MyGridComponent implements OnInit {
  @Input() myWidth = 0;

  width: number = 0;
  nbRows = [{}, {}, {}, {}];

  constructor(private service: GridService) {

  }

  ngOnInit(): void {
    this.service.conf.width = this.myWidth;
    this.width = this.service.conf.width;
  }

}
