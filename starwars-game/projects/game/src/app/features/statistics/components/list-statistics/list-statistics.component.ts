import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'game-list-statistics',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-statistics.component.html',
  styleUrl: './list-statistics.component.css'
})
export class ListStatisticsComponent {
  stats = [{ annee: 2024 }, {annee: 2023}, {annee: 2020}]
}
