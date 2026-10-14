import { Component, inject, OnInit } from '@angular/core';
import { GetListStatsBusinessService } from '../../services/get-list-stats-business.service';

@Component({
  selector: 'game-display-stats',
  imports: [],
  templateUrl: './display-stats.component.html',
  styleUrl: './display-stats.component.css'
})
export class DisplayStatsComponent implements OnInit {
  private readonly service = inject(GetListStatsBusinessService);
  protected readonly items = this.service.getList();

  ngOnInit(): void {
  }
}
