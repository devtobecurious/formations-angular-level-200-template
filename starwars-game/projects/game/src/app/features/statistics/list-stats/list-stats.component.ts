import { Component, NgZone, OnInit } from '@angular/core';
import { Statistic } from '../models';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'game-list-stats',
  templateUrl: './list-stats.component.html',
  styleUrls: ['./list-stats.component.css']
})
export class ListStatsComponent implements OnInit {
  items !: Statistic[];


  constructor(private zone: NgZone,
              private service: StatsService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(items => this.items = items);

    // this.zone.runOutsideAngular(() => {

    // });
  }

}
