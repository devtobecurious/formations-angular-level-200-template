import { Component, inject } from '@angular/core';
import { GetAllVideoGames } from '../../services/get-all-video-games';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.html',
  styleUrl: './create-profile.css',
  providers: [GetAllVideoGames]
})
export class CreateProfile {
  private readonly getAllVideoGames = inject(GetAllVideoGames);
  protected readonly videoGamesSignal = this.getAllVideoGames.summaryListSignal;
}
