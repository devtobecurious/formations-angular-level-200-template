import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'game-grid-special',
  templateUrl: './grid-special.component.html',
  styleUrls: ['./grid-special.component.css'],
  providers: [
    ConfigService
  ]
})
export class GridSpecialComponent implements OnInit, OnChanges {
  // private _tailleH2 = 0;

  @Input() set tailleH2(value: number) {
    // this._tailleH2 = value;

    this.config.tailleH2 = value;
  }

  get tailleH2(): number {
    return this.config.tailleH2;
  }

  constructor(private config: ConfigService) {
    //this.config.tailleH2 = tailleH2;
    // this.config.tailleH2 = Math.random() * 100;
    console.info('parent', config.tailleH2);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // changes.tailleH2.currentValue
  }

  ngOnInit(): void {
  }

}
