import { Component, signal } from '@angular/core';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = signal('game'); // gestionnaire d'état par component

  updateTitle(): void  {
    this.title.set('Star wars game')
  }
}
