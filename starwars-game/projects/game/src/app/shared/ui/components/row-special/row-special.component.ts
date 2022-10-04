import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'game-row-special',
  templateUrl: './row-special.component.html',
  styleUrls: ['./row-special.component.css']
})
export class RowSpecialComponent implements OnInit {

  constructor(private config: ConfigService) {
    console.info('enfant', config.tailleH2);
  }

  ngOnInit(): void {
  }

}
