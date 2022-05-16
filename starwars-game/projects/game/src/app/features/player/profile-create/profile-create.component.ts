import { Component, OnInit } from '@angular/core';
import { Player } from '../models';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'game-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {
  private player: Player = {
    name: '',
    isJedi: false,
    temple: ''
  };

  private arme = {
    type: 'blaster',
  };

  updatePlayer(player: Player) {
    this.player = player;
  }

  updatePlayer2(player: {
    name: string,
    isJedi: boolean,
    temple: string
  }) {
    this.player = player;
  }

  constructor(private service: PlayerService) { }

  ngOnInit(): void {

  }



  onClick() {
    this.service
    .addOne(this.player)
    .subscribe();
  }
}
