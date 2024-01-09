import { Injectable, inject } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { VideoGames } from "../models";
import { VideoGamesInfrastructure } from "./video-games.infrastructure";

@Injectable({ providedIn: 'root' })
export class VideoGamesApplication {
  private readonly infra = inject(VideoGamesInfrastructure);
  private videoGames$: Observable<VideoGames> | null = null;

  getAll(): Observable<VideoGames> {
    if (!this.videoGames$) {
      this.videoGames$ = this.infra.getAll().pipe(shareReplay(1));
    }

    return this.videoGames$;
  }
}
