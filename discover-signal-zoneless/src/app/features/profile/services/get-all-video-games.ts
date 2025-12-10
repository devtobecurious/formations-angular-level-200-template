import { toSignal } from '@angular/core/rxjs-interop';
import { computed, inject, Injectable, Signal } from '@angular/core';
import { Observable, retry, shareReplay } from 'rxjs';
import { VideoGame, VideoGameSummary } from '../models/profile';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetAllVideoGames {
  private readonly http = inject(HttpClient);
  private readonly videoGames$ = this.http.get<VideoGame[]>('/api/videogames').pipe(retry(2), shareReplay(1))

  getAll(): Observable<VideoGame[]> {
    return this.videoGames$;
  }
  private get toWholeSignal(): Signal<VideoGame[] | undefined> {
    return toSignal(this.getAll()); // take(1) is implicit with toSignal
  }

  get summaryListSignal(): Signal<VideoGameSummary[]> {
    return computed(() => {
      const videoGames = this.toWholeSignal();

      if (!videoGames) {
        return [];
      }

      return videoGames.map(game => ({ fakeId: `${game.title} (${game.pegi})`, title: game.title }));
    });
  }
}
