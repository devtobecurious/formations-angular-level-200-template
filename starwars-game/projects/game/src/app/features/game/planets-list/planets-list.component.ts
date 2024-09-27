import { Component, inject, OnInit } from '@angular/core';
import { PlanetsBusiness } from '../services/planets.business';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'game-planets-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './planets-list.component.html',
  styleUrl: './planets-list.component.css'
})
export class PlanetsListComponent implements OnInit {
  private readonly business = inject(PlanetsBusiness);
  planets$ = this.business.getAll();

  ngOnInit(): void {
    this.business.init().subscribe();
  }
}
