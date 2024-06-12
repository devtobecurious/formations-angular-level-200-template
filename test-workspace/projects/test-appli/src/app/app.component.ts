import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestLibComponent } from 'ma-super-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('test-appli')
  bigTitle = computed(() => this.title().toUpperCase()) // équivalent pipe

  change(): void {
    this.title.set('Ah que coucou')
  }
}
