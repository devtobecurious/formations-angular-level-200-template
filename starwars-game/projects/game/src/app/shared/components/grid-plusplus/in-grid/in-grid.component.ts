import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GridConfigService } from '../services/grid-config.service';

@Component({
  selector: 'game-in-grid',
  templateUrl: './in-grid.component.html',
  styleUrls: ['./in-grid.component.css'],
  providers: [
    GridConfigService
  ]
})
export class InGridComponent implements OnInit, OnChanges {
  @Input() nbEnfants = 5;

  private _tailleH2 !: number;

  @Input() set tailleH2(value: number)
  {
    this._tailleH2 = value;
    this.config.tailleH2.next(value);
    console.info('SET TAILLE H2');
  }
  get tailleH2(): number {
    return this._tailleH2;
  }

  constructor(public config: GridConfigService) {

    console.info('0', this.config.tailleH2);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {

  }

}
