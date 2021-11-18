import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'game-picture-player',
  templateUrl: './picture-player.component.html',
  styleUrls: ['./picture-player.component.css']
})
export class PicturePlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    PicturePlayerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PicturePlayerModule { }
