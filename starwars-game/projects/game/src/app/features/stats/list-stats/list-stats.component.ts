import { Component, OnInit } from '@angular/core';
import { StatsBusinessService } from '../service/stats-business.service';

@Component({
  selector: 'game-list-stats',
  templateUrl: './list-stats.component.html',
  styleUrls: ['./list-stats.component.css']
})
export class ListStatsComponent implements OnInit {
  items: any[] = [];

  constructor(private service: StatsBusinessService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

}
