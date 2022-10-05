import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'game-row-special',
  templateUrl: './row-special.component.html',
  styleUrls: ['./row-special.component.css']
})
export class RowSpecialComponent implements OnInit {
 // tailleH2 !: number;

  constructor(public config: ConfigService) {
    console.info('enfant', config.tailleH2);
  }

  ngOnInit(): void {
    // this.config.state.subscribe(item => this.tailleH2 = item);
  }

}
