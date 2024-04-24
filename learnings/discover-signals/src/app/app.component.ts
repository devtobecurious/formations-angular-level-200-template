import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleStore } from './title.store';
import { EnfantAvecTitreComponent } from './enfant-avec-titre/enfant-avec-titre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnfantAvecTitreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private titleStore = inject(TitleStore);
  title = this.titleStore.store;
  //title = signal<string>('Il était une fois');

  change(): void {
    setTimeout(() => {
      // this.title.set(".. dans une lointaine galaxie");
      this.titleStore.update('Dans une lointaine galaxie');
    }, 1500);
  }
}
