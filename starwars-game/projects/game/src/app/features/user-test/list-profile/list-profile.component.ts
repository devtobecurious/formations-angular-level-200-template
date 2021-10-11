import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'game-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    ListProfileComponent
  ],
  exports: [
    ListProfileComponent
  ]
})
export class ListProfileModule { }
