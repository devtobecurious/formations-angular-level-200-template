import { Stat, StatisticsService } from './../services/statistics.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-stats-list',
  templateUrl: './stats-list.component.html',
  styleUrls: ['./stats-list.component.css']
})
export class StatsListComponent implements OnInit {
  items: Stat[] = [];


  constructor(private service: StatisticsService) { }

  ngOnInit(): void {
    this.service.getAll()
                .subscribe(items => this.items = items);
  }

}
