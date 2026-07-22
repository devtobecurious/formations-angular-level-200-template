import { Component } from '@angular/core';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'ICI GAME';

  toUpperTitle(title: string): string {
    console.info('toUpperTitle');
    return title.toUpperCase();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = '>> Star wars game ';
    }, 1000);
  }
}
