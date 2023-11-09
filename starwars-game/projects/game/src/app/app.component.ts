import { ApplicationRef, Component, inject } from '@angular/core';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';
  application = inject(ApplicationRef);

  launchTick(): void {
    this.application.tick();
  }
}
