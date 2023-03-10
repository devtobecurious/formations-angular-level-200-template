import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { People } from '../models';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'game-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent {
  @Input() items !: People;
}
