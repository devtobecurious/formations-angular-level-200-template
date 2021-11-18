import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'game-player-one',
  templateUrl: './player-one.component.html',
  styleUrls: ['./player-one.component.css']
})
export class PlayerOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


@NgModule({
  declarations: [
    PlayerOneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlayerOneModule { }
