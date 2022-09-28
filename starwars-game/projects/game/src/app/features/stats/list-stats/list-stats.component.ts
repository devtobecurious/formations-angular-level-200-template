import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-list-stats',
  templateUrl: './list-stats.component.html',
  styleUrls: ['./list-stats.component.css']
})
export class ListStatsComponent implements OnInit {
  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
