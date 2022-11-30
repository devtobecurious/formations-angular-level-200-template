import { Component, OnInit } from '@angular/core';
import { GridParentComponent } from '../grid-parent/grid-parent.component';
import { GridConfigService } from '../services/grid-config.service';

@Component({
  selector: 'game-row-enfant',
  templateUrl: './row-enfant.component.html',
  styleUrls: ['./row-enfant.component.css']
})
export class RowEnfantComponent implements OnInit {

  constructor(private service: GridConfigService) { } // possible mais pas conseillé : private container: GridParentComponent

  ngOnInit(): void {
    this.service.store.subscribe(item => console.info('je recup ma config', item));
  }

}
