import { Component, OnInit } from '@angular/core';
import { EnemyDTO } from '../../../core/models/enemy.dto';
import { EnemyService } from '../services/enemy.service';

@Component({
  selector: 'game-enemy-list',
  templateUrl: './enemy-list.component.html',
  styleUrls: ['./enemy-list.component.css']
})
export class EnemyListComponent implements OnInit {
  items: EnemyDTO[] = [];

  constructor(private service: EnemyService) { }

  ngOnInit(): void {
    this.service.getAll()
                .subscribe(data => this.items = data);
  }

}
