import { Component, OnInit } from '@angular/core';
import { EnemyDto } from '../../../core/models/enemy';
import { EnemyService } from '../services/enemy.service';

@Component({
  selector: 'game-list-enemies',
  templateUrl: './list-enemies.component.html',
  styleUrls: ['./list-enemies.component.css']
})
export class ListEnemiesComponent implements OnInit {
  // enemies !: string[];
  // enemies !: { id: number, name: string}[];
  enemies !: EnemyDto[];

  constructor(private service: EnemyService) {
    // this.enemies = [];
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(items => this.enemies = items);
  }
}
