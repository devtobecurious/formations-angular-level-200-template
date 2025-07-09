import { Component, computed, signal } from '@angular/core';
import { initialValue, GamerDto } from './models';

@Component({
  selector: 'app-gamer',
  imports: [],
  templateUrl: './gamer.html',
  styleUrl: './gamer.css'
})
export class Gamer {
  protected gamerSignal = signal<GamerDto>(initialValue)
  protected pegi13 = computed(() => this.gamerSignal().age >= 13)
  protected notPlayedvideoGamesSignal = computed(() => this.gamerSignal().videoGames.filter(game => !game.isPlayed))

}
