import { Component, OnInit } from '@angular/core';
import { GridConfigService } from './services/grid-config.service';

const value = {
  id: '1'
};

class MonServiceAMoi {
  id = 'test'
}

@Component({
  selector: 'game-grid-custom',
  templateUrl: './grid-custom.component.html',
  styleUrls: ['./grid-custom.component.css'],
  providers: [
    {
      provide: GridConfigService,
      // useValue: value
      // useClass: MonServiceAMoi
      useFactory: () => { return new MonServiceAMoi() }
    }
  ]
})
export class GridCustomComponent implements OnInit {
  items: any[] = [{}, {}];
  id: string;



  constructor(private config: GridConfigService) {
    this.id = this.config.id;
  }

  ngOnInit(): void {
  }

}
