import { Component, inject } from '@angular/core';
import { PeopleApplicationService } from '../../services/people-application.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'game-list-people',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list-people.component.html',
  styleUrl: './list-people.component.css'
})
export class ListPeopleComponent {
  private readonly peopleApplication = inject(PeopleApplicationService);
  persons$ = this.peopleApplication.getAll();
}
