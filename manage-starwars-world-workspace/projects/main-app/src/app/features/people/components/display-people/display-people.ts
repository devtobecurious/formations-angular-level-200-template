import { Component, inject } from '@angular/core';
import { GetAllPeople } from '../../services/get-all-people';
import { GetAllPeopleBusiness } from '../../services/get-all-people.business';

@Component({
  imports: [],
  selector: 'app-display-people',
  styleUrl: './display-people.css',
  templateUrl: './display-people.html',
  // providers: [
  //   GetAllPeople,
  //   GetAllPeopleBusiness
  // ]
})
export class DisplayPeople {
  private readonly service = inject(GetAllPeopleBusiness);

}
