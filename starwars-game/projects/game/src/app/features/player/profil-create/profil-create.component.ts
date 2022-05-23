import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'game-profil-create',
  templateUrl: './profil-create.component.html',
  styleUrls: ['./profil-create.component.css']
})
export class ProfilCreateComponent implements OnInit {

  constructor(private service: PlayerService) { }

  ngOnInit(): void {

  }

  toClick() {
    this.service.save({surname: 'Doe', typeForce: 'light', weapon: 'lightsaber', picture: 'https://starwars-visualguide.com/assets/img/characters/5.jpg'})
                .subscribe();
  }
}


@NgModule({
  declarations: [
    ProfilCreateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfilCreateComponent
  ]
})
export class PlayerCreateModule { }
