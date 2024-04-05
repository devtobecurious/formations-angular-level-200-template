import { Component, computed, inject, signal } from '@angular/core';
import { TitreService } from './title.service';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly titreService = inject(TitreService)
  title = this.titreService.title;
  titleMajuscule = this.titreService.titleMajuscule

  change(): void {
    //this.title  = 'Star wars game'
    this.title.set('Star wars game');

    const valeur = this.title();
  }
}
