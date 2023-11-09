import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { changeStateCell, Tile, TileCell } from './models';
import { ConfigStyleService } from './services/config-style.service';

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ConfigStyleService] // Instancie le service à chaque fois que ce composant est instancié (appelé dans un template parent)
})
export class GridComponent implements OnInit, AfterViewInit, AfterContentInit {
  styleService = inject(ConfigStyleService);

  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });
  };
  cells: TileCell[] = [];



  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {

  }


  ngOnInit(): void {

  }

  logView() {
  }

  onClick() {
  }

  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

}
