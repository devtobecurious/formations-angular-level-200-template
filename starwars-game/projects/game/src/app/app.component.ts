import { Component, inject } from '@angular/core';
// import { StatisticsBusiness } from 'statistics';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';
  // private readonly statsBusiness = inject(StatisticsBusiness)

  initialize(): void {
    // this.statsBusiness.initialize()
  }
}
