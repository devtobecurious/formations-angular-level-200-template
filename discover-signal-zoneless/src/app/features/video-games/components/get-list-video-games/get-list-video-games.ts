import { Component, resource, signal } from '@angular/core';
import { VideoGame } from '../../../profile/models/profile';

@Component({
  selector: 'app-get-list-video-games',
  imports: [],
  templateUrl: './get-list-video-games.html',
  styleUrl: './get-list-video-games.css',
})
export class GetListVideoGames {
  private readonly query = signal('');

  protected readonly videoGamesResource = resource({
    defaultValue: [] as VideoGame[],
    params: this.query,
    loader: (query) => fetch('/api/video-games').then(res => res.json() as Promise<VideoGame[]>),
  })
}
