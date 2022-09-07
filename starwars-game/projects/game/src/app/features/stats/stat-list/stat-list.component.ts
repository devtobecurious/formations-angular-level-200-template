import { Component, OnInit } from '@angular/core';
import { StatApplicationService } from '../application/stat-application.service';

@Component({
  selector: 'game-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.css'],
  // providers: [
  //   StatApplicationService
  // ]
})
export class StatListComponent implements OnInit {
  items: string[] = [];

  constructor(private readonly statService: StatApplicationService) {

  }

  ngOnInit(): void {
    this.statService.getAll().subscribe(items => this.items = items);
  }

}
