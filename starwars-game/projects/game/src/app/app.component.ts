import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'game';
  title = signal<string>('game'); // gestionnaire d'état par composant
  titleUpper = computed(() => this.title().toUpperCase());
  private readonly router = inject(Router);

  private ecouteChangement = effect(() => {
    const title = this.title();
    // redirection dès que changement
    if(title === 'game') {
      this.router.navigate(['gameplus']);
    }
  });

  change(): void {
    this.title.set('Star wars game');
  }
}
