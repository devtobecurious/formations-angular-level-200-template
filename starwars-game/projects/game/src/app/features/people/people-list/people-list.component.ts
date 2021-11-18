import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'game-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  constructor(private service: PeopleService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(items => console.info(items));
  }

}

@NgModule({
  declarations: [
    PeopleListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PeopleListComponent
  ]
})
export class PeopleListModule { }
