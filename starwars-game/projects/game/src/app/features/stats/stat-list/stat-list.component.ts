import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridConfigService } from '../../../shared/ui/components/grid-custom/services/grid-config.service';
import { StatItem } from '../models';
import { StatService } from '../services/stat.service';

@Component({
  selector: 'game-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.css'],

})
export class StatListComponent implements OnInit {
  // items !: StatItem[];
  obsItems$ !: Observable<StatItem[]>;

  constructor(private service: StatService) {
  }

  ngOnInit(): void {
    this.obsItems$ = this.service.getAll();//.subscribe(items => this.items = items);
  }

}
