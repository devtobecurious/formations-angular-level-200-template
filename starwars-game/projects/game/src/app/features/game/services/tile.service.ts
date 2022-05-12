import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Tile } from '../../../shared/components/grid/models';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  tiles: Tile[] = [];

  constructor(private httpClient: HttpClient) {
    for (let index = 0; index < 255; index++) {
      this.tiles.push({
        isRevealed: false,
        value: Math.floor(Math.random() * 100),
        id: index
      });
    }
  }

  loadAll(): Observable<Tile[]> {
    return of(this.tiles).pipe(delay(1200));
  }
}
