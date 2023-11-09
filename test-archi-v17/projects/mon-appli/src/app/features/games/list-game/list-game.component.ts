import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { GamesService } from '../services';

@Component({
  selector: 'app-list-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-game.component.html',
  styleUrl: './list-game.component.css'
})
export class ListGameComponent {
   // bs = new BehaviorSubject<string>('');
    private readonly service = inject(GamesService);
    store = this.service.userStore;


   update(): void {
    this.service.updatePrenom('Leia');
   }
}
