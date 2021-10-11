import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-list-enemies',
  templateUrl: './list-enemies.component.html',
  styleUrls: ['./list-enemies.component.css']
})
export class ListEnemiesComponent implements OnInit {
  enemies: string[] = ['1', '2'];

  constructor() { }

  ngOnInit(): void {
  }

}
