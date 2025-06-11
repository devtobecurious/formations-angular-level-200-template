import { Component, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  protected counter = 0
  tiles: Tile[] = [];

  constructor(private tileService: TileService) { }

  start(): void {
    setInterval(() => {
      this.counter ++
    }, 1000);
  }

  ngOnInit(): void {
    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

}
