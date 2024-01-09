import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { VideoGames } from "../models";

const inMemoryService = {
  getAll(): Observable<VideoGames> {
    const games: VideoGames = [
      { id: 1, label: 'Mario' },
      { id: 2, label: 'FF 7' },
      { id: 3, label: 'God of war' },
    ];
    return of(games).pipe(delay(1000));
  }
}

@Injectable({ providedIn: 'root', useValue: inMemoryService })
export class VideoGamesInfrastructure {
  getAll(): Observable<VideoGames> {
    throw new Error('Not implemented');
  }
}
