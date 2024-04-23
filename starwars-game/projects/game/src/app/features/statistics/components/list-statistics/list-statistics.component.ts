import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StatisticsApplication } from '../../services/statistics.application';

@Component({
  selector: 'game-list-statistics',
  standalone: true,
  //imports: [NgFor],
  imports: [AsyncPipe],
  templateUrl: './list-statistics.component.html',
  styleUrl: './list-statistics.component.css'
})
export class ListStatisticsComponent {
  private readonly application = inject(StatisticsApplication);
  items$ = this.application.getAll();
  // items: string[] = [];

  ngOnInit(): void {
    this.items$.subscribe();
  }
}
