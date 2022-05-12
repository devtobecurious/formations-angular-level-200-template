import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';

export interface StatItem {
  month: number;
  nbGames: number;
}

@Component({
  selector: 'gameSW-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class StatListComponent implements OnInit {
  items: StatItem[] = [];

  constructor(private service: StatsService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

}
