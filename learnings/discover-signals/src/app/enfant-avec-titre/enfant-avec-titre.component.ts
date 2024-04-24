import { Component, inject } from '@angular/core';
import { TitleStore } from '../title.store';

@Component({
  selector: 'app-enfant-avec-titre',
  standalone: true,
  imports: [],
  templateUrl: './enfant-avec-titre.component.html',
  styleUrl: './enfant-avec-titre.component.css'
})
export class EnfantAvecTitreComponent {
  private readonly titleStore = inject(TitleStore);
  title = this.titleStore.store;
  maj = this.titleStore.majuscule;
}
