import { Component } from '@angular/core';
import d3 from 'd3';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'game';

  generate(): void {
    //d3.geoPath()
  }
}
