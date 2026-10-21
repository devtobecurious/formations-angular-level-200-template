import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DesignSystem } from 'design-system';

@Component({
  imports: [DesignSystem, RouterLink, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
