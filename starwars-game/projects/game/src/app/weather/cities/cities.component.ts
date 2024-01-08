import { Component, inject } from '@angular/core';
import { CitiesBusiness } from './services/cities.business';
import { AsyncPipe } from '@angular/common';
import { CitiesStore } from './services/cities.store';

@Component({
  selector: 'game-cities',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  cities$ = inject(CitiesBusiness).getAll();
  private readonly store = inject(CitiesStore);

  selectCity(event: EventTarget | null): void {
    const target = event as HTMLSelectElement;
    const cityId = target.value;

    const city = this.store.selectOne(cityId);
    this.store.setOne(city!);
  }
}
