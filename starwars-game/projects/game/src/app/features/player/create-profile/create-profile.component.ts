import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'game-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
  providers: [
    PlayerService
  ]
})
export class CreateProfileComponent implements OnInit {

  constructor(private service: PlayerService) { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateProfileComponent
  ]
})
export class CreateProfileModule { }
