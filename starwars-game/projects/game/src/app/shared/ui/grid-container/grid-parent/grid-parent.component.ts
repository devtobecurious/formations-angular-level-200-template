import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GridConfigService } from '../services/grid-config.service';

@Component({
  selector: 'game-grid-parent',
  templateUrl: './grid-parent.component.html',
  styleUrls: ['./grid-parent.component.css'],
  providers: [
    GridConfigService // Il sera instancié à chaque fois qu'on instancie le component
  ]
})
export class GridParentComponent implements OnInit, OnChanges {
  @Input() set h2Size(value: number) {
    this.config.store.next({ h2: { size: value }});
  }

  constructor(private config: GridConfigService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('se déclenche à chaque changement dans les @Input');
  }

  ngOnInit(): void {
  }

}
