import { Component, ElementRef, inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { GridComponent } from '../../../shared/components/grid/grid.component';
import { concatMap, fromEvent, interval, map, mergeMap, Observable, switchMap, take, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { GameApplication } from '../services/game.application';

@Component({
    selector: 'game-new-one',
    templateUrl: './new-one.component.html',
    styleUrls: ['./new-one.component.css'],
    standalone: true,
    imports: [GridComponent, AsyncPipe]
})
export class NewOneComponent implements OnInit {
  private readonly application = inject(GameApplication)
  private readonly zone = inject(NgZone);
  @ViewChild('btnStart', { static: true }) btnStart !: ElementRef<HTMLButtonElement>;
  parent$ !: Observable<any>;
  enfant$ = interval(1000).pipe(take(60));
  timer$!: Observable<number>;
  tiles: Tile[] = [];

  constructor(private tileService: TileService) {
  }

  ngOnInit(): void {
    //this.zone.runOutsideAngular(() => {
      this.parent$ = fromEvent(this.btnStart.nativeElement, 'click');
      this.timer$ = this.parent$
      .pipe(
        tap(item => {
          this.application.addNewOne();
        }),
        // s'exécute sur le next, donc ici à chaque fois que je clique
        // mergeMap(item => this.enfant$)  // crée une nouvelle subscription à chaque next du parent, même si l'ancienne subscription n'est pas complète
        // concatMap(item => this.enfant$), // crée une nouvelle subscription si la dernière a été complete
        switchMap(item => this.enfant$)
      )
    //})

    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

}
