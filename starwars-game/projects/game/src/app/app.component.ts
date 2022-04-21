import { Component } from '@angular/core';

export type MonType = {
  game: {
    key: string,
    config: {
      duration: number
    }
  }
}

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
