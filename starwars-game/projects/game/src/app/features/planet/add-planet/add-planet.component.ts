import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Planet } from '../models';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { addNewPlanetAction } from '../store/planet.actions';

@Component({
  selector: 'game-add-planet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent {
  private readonly store = inject(Store<ApplicationState>);
  planet: Planet = {id: 0, title: '',systemSolar: 'ici'};

  saveOne(): void {
    this.store.dispatch(addNewPlanetAction({item: this.planet}));
  }
}
