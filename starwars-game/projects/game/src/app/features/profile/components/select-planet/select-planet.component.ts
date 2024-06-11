import { Component, inject } from '@angular/core';
import { PlanetsApplication } from '../../services/planets.application';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'game-select-planet',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './select-planet.component.html',
  styleUrl: './select-planet.component.css'
})
export class SelectPlanetComponent {
  private readonly application = inject(PlanetsApplication)
  planets$ = this.application.getAll()
}
