import { Component, OnInit } from '@angular/core';
import { Statistic, StatsService } from '../service/stats.service';

@Component({
  selector: 'game-list-statistic',
  templateUrl: './list-statistic.component.html',
  styleUrls: ['./list-statistic.component.css']
})
export class ListStatisticComponent implements OnInit {
  // items = ['', '']; Etape 1
  // items : string[] | undefined;
  items: Statistic[] = [];

  constructor(private readonly service: StatsService) {
  }

  ngOnInit(): void {
    // console.info('ListStatisticComponent');
    // if(typeof(this.items) !== 'undefined') {

    // }
    this.service.getAll().subscribe(items => this.items = items);
  }

}
