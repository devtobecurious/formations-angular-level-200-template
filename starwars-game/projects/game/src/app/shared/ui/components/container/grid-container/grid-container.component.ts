import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../models/config';
import { GridConfigService } from '../services/grid-config.service';



@Component({
  selector: 'game-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css'],
  providers: [
    GridConfigService
  ]
})
export class GridContainerComponent implements OnInit {
  private _style : Config | undefined;

  @Input() set config(value: Config) {
    this._style = value;
    this.configService.config = value;
  }

  get config(): any {
    return this._style;
  }

  cells: string[] = ["", "", "", ""];

  constructor(private configService: GridConfigService) {}

  ngOnInit(): void {
  }

}
