import { ApplicationRef, Component } from '@angular/core';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';

  constructor(private readonly application: ApplicationRef) {
  }

  refreshAll(): void {
    this.application.tick();
  }
}
