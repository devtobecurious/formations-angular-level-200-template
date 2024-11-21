import { Component, computed, inject, signal } from '@angular/core';
import { Person } from './models';
import { GetAllPeopleService } from './services/get-all-people.service';
import {toSignal} from '@angular/core/rxjs-interop'

@Component({
  selector: 'game-list-people',
  standalone: true,
  imports: [],
  templateUrl: './list-people.component.html',
  styleUrl: './list-people.component.css'
})
export class ListPeopleComponent {
  private readonly service = inject(GetAllPeopleService)
  // items = signal<Person[]>([])
  items = toSignal(this.service.getAll())
  title = signal<string>('Un titre par defaut')
  subTitle = computed(() => this.title().toUpperCase())

  // newSignal = computed(() => signal(this.subTitle()))

  ngOnInit(): void {
    this.title.set('List of people')
   //  this.title.set('List of people')
  }
}
