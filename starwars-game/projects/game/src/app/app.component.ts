import { Component, signal } from '@angular/core';
import d3 from 'd3';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  // title = 'game';
  title = signal<string>('game')


  generate(): void {
    this.title.set('game2')

    //d3.geoPath()
  }
}
