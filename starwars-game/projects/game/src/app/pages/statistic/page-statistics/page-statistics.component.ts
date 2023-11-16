import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStatisticsComponent } from '../../../features/statistic/list-statistics/list-statistics.component';

@Component({
  selector: 'game-page-statistics',
  standalone: true,
  imports: [CommonModule, ListStatisticsComponent],
  templateUrl: './page-statistics.component.html',
  styleUrl: './page-statistics.component.css'
})
export class PageStatisticsComponent {

}
