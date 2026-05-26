import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  private readonly title = signal('game');
  private readonly gameVersion = signal(1.0);
  protected readonly titleAsUpper = computed(() => `${this.title().toUpperCase()} (${this.gameVersion()})` );

  ngOnInit(): void {
    setTimeout(() => {
      //this.title.set('Star wars game');
      this.title.update(oldTitle => oldTitle + ' !')
    }, 1000);
  }

  computeSum(a: number, b: number): number {
    //this.title.update(a => a.toString() + '!');
    return a + b;
  }

  updateVersion(): void {
    this.gameVersion.update(old => old + 1);
  }
}
