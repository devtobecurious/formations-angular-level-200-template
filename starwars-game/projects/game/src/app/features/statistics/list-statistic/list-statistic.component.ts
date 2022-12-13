import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-list-statistic',
  templateUrl: './list-statistic.component.html',
  styleUrls: ['./list-statistic.component.css']
})
export class ListStatisticComponent implements OnInit {
  // items = ['', '']; Etape 1
  // items : string[] | undefined;
  items !: string[];

  constructor() {
  }

  ngOnInit(): void {
    // console.info('ListStatisticComponent');
    // if(typeof(this.items) !== 'undefined') {

    // }
  }

}
