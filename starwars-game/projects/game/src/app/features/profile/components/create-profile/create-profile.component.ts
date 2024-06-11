import { Component, inject } from '@angular/core';
import { SelectPlanetComponent } from '../select-planet/select-planet.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'game-create-profile',
  standalone: true,
  imports: [SelectPlanetComponent],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css'
})
export class CreateProfileComponent {
   
}
