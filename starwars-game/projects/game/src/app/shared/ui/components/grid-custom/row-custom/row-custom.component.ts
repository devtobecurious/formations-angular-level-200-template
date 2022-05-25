import { Component, OnInit } from '@angular/core';
import { GridConfigService } from '../services/grid-config.service';

@Component({
  selector: 'game-row-custom',
  templateUrl: './row-custom.component.html',
  styleUrls: ['./row-custom.component.css']
})
export class RowCustomComponent implements OnInit {
  id !: string;

  constructor(private config: GridConfigService) {
    this.id = this.config.id;
    console.info('RowCustomComponent.constructor()', this.config.id);
  }

  ngOnInit(): void {
  }

}
