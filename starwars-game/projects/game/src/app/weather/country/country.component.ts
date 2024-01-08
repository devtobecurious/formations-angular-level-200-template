import { Component, inject } from '@angular/core';
import { CountriesBusiness } from './services/countries.business';
import { AsyncPipe } from '@angular/common';
import { CountriesStore } from './services/country.store';

@Component({
  selector: 'game-country',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  countries$ = inject(CountriesBusiness).getAll();
  private readonly store = inject(CountriesStore);

  selectCountry(event: EventTarget | null): void {
    const target = event as HTMLSelectElement;
    this.store.setOne({ code: target.value, name: '' });
  }
}
