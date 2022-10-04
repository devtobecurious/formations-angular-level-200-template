import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'game-grid-special',
  templateUrl: './grid-special.component.html',
  styleUrls: ['./grid-special.component.css'],
  providers: [
    ConfigService
  ]
})
export class GridSpecialComponent implements OnInit {


  constructor(private config: ConfigService) {
    this.config.tailleH2 = Math.random() * 100;
    console.info('parent', config.tailleH2);
  }

  ngOnInit(): void {
  }

}
