import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignSystem } from 'design-system';

@Component({
  imports: [RouterOutlet, DesignSystem],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('main-app');
}
