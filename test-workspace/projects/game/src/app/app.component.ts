import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerComponent } from 'monplayer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('game');

  toUpperSelector = ()=> this.title().toUpperCase();

  titleMaj = computed(this.toUpperSelector);
}
