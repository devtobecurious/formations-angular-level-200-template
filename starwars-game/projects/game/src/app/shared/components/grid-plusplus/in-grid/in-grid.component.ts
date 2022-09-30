import { Component, Input, OnInit } from '@angular/core';
import { GridConfigService } from '../services/grid-config.service';

@Component({
  selector: 'game-in-grid',
  templateUrl: './in-grid.component.html',
  styleUrls: ['./in-grid.component.css'],
  providers: [
    GridConfigService
  ]
})
export class InGridComponent implements OnInit {
  @Input() nbEnfants = 5;

  private _tailleH2 !: number;

  @Input() set tailleH2(value: number)
  {
    this._tailleH2 = value;
    console.info('SET TAILLE H2');
  }
  get tailleH2(): number {
    return this._tailleH2;
  }

  constructor(public config: GridConfigService) {
    this.config.tailleH2 = this.tailleH2;
    console.info('0', this.config.tailleH2);
  }

  ngOnInit(): void {
    console.info(this.tailleH2);

    console.info(this.config.tailleH2);
  }

}
