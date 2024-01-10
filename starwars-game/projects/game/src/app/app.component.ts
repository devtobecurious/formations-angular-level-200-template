import { Component, inject } from '@angular/core';
import { StatsBusiness } from './features/stats/services/stats.business';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';
  private readonly business = inject(StatsBusiness);

  ngOnInit(): void {
    this.business.initialize();
  }
}
